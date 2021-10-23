import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import authService from "../../services/authService";
import { useForm } from '../../hooks/useForm'

export default function FormResults (props) {
    const history = useHistory();
    const formRef = useRef();
    const [message, updateMessage] = useState('')
    const [formInvalid, setValidForm] = useState(true)
    const [list, setList] = useState([])
    const [formValue, handleChange] = useForm({
        
    });

    const handleSubmit = async (e) => {

    }

    return (
        <div className="min-h-screen bg-white flex">
            {/*---------------------List Div------------------------*/}
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-gray-400">
                <div className="mx-auto w-auto max-w-sm lg:w-96">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Results List</h2>
                    <iframe src="url" title="description"></iframe>
                </div>
            </div>
            {/*---------------------Map Div------------------------*/}
            <div className="hidden lg:block relative w-0 flex flex-1 bg-blue-300">
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Map</h2>
            {/*---------------------Search------------------------*/}
                <div className="flex justify-left">
                    <div className="shadow flex">
                        <input className="w-full rounded p-2" type="text" placeholder="Search"/>
                        <button className="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
                            <i className="material-icons">search</i>
                        </button>
                    </div>  
                </div>
            {/*---------------------Form Return------------------------*/}
                <div className="flex justify-end items-end">
                    <button className="bg-red-500 w-auto rounded p-2 absolute">
                        Redo Form
                    </button>
                </div>
            </div>

        </div>
    )
}