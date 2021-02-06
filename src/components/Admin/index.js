import React, {useState} from 'react';
import { AdminContainer, AdminH1, AdminWrapper, AdminForm, AdminH2, FormLabel, FormInput, FormInputDesc, DataTable, DataTr, DataTd, DataTh } from './AdminElements';
import { Button } from './../ButtonElement';
import Axios from 'axios';

const AdminSection = () => {
    const [judul, setJudul] = useState("");
    const [tempat, setTempat] = useState("");
    const [tanggal, setTanggal] = useState("");
    const [link, setLink] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [gambar, setGambar] = useState("");

    const [eventList, setEventList] = useState([]);

    const addEvent = () => {
        Axios.post('http://localhost:3001/create', {
            judul: judul,
            tempat: tempat,
            tanggal: tanggal,
            link: link,
            deskripsi: deskripsi,
            gambar: gambar
        }).then(() => {
            console.log("success");
        });
    }

    // const getEvents = () => {
    //     Axios.get('http://localhost:3001/getevents').then((response) => {
    //         setEventList(response.data);
    //         console.log(response);
    //     });
    // }
    
    Axios.get('http://localhost:3001/getevents').then((response) => {
            setEventList(response.data);
            console.log(response);
    });

    return (
        <AdminContainer>
            <AdminH1>Admin Page</AdminH1>
            <AdminWrapper>
                <AdminForm>
                    <AdminH2>Add Event</AdminH2>
                    <FormLabel htmlfor="judul">Judul</FormLabel>
                    <FormInput type="text" name="judul" onChange={(event) => {setJudul(event.target.value)}}/>
                    <FormLabel htmlfor="tempat">Tempat</FormLabel>
                    <FormInput type="text" name="tempat" onChange={(event) => {setTempat(event.target.value)}}/>
                    <FormLabel htmlfor="tanggal">Tanggal</FormLabel>
                    <FormInput type="date" name="tanggal" onChange={(event) => {setTanggal(event.target.value)}}/>
                    <FormLabel htmlfor="link">Link Daftar</FormLabel>
                    <FormInput type="text" name="link" onChange={(event) => {setLink(event.target.value)}}/>
                    <FormLabel htmlfor="gambar">Upload gambar</FormLabel>
                    <FormInput type="text" name="gambar" onChange={(event) => {setGambar(event.target.value)}}/>
                    <FormLabel htmlfor="deskripsi">Description</FormLabel>
                    <FormInputDesc name="deskripsi" onChange={(event) => {setDeskripsi(event.target.value)}}/>
                    <Button onClick={addEvent}>Submit</Button>
                </AdminForm>
            </AdminWrapper>

            <AdminWrapper>
                <DataTable>
                    <DataTr>
                        <DataTh>Judul</DataTh>
                        <DataTh>Tempat</DataTh>
                        <DataTh>Tanggal</DataTh>
                        <DataTh>Link</DataTh>
                        <DataTh>Gambar</DataTh>
                        <DataTh>Deskripsi</DataTh>
                    </DataTr>
                    {eventList.map((val, key) => {
                        return(
                            <DataTr>
                                <DataTd>{val.judul}</DataTd>
                                <DataTd>{val.tempat}</DataTd>
                                <DataTd>{val.tanggal}</DataTd>
                                <DataTd>{val.link}</DataTd>
                                <DataTd>{val.gambar}</DataTd>
                                <DataTd>{val.deskripsi}</DataTd>
                            </DataTr>
                        )
                    })}
                    
                </DataTable>
            </AdminWrapper>
        </AdminContainer>
    )
}

export default AdminSection