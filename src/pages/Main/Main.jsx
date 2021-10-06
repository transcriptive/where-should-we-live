import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import authService from "../../services/authService";
import { useForm } from '../../hooks/useForm'

export default function Main (props) {
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
        <div className="min-h-screen bg-blue flex">
            {/*---------------------List Div------------------------*/}
            <div classname="bg-red">
                Hello
            </div>
            {/*---------------------Search------------------------*/}

        </div>
    )
}