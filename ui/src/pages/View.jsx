import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Grid from '../component/Grid'
import { Detailing } from '../component/Detailing'

const View = () => {

    const [Datas, setDatas] = useState([]);

    const viewData = async () => {
        try {
            const resp = await fetch('/api/view');
            const result = await resp.json();
            console.log(result);
            setDatas(result.data)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        viewData();
    }, [])


    return (
        <>
            <Navbar />
            <Grid datas={Datas} />
            <Detailing />

        </>
    )
}

export default View