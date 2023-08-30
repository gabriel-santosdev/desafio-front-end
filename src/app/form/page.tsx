'use client'
import { useState } from "react";
import BackgroundImage from '../../../public/assets/icons/background/Register-Background.png'


const Form = () => {

    // const backgroundImage = '/public/assets/icons/background/Register-Background.png'

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        fullname: '',
        password: ''
    });

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form data:', formData);
        return null;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (

        <div className="min-h-screen py-40m bg-gradient-to-r from-violet-500 to-fuchsia-500 h-14 ">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url('./Register-Background.png')` }}>

                        <h1 className="text-white text-3xl mb-3">Bem-vindo</h1>
                        <div>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac <a href="#" className="text-purple-500 font-semibold">Ler mais...</a></p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 py-16 px-12">
                        <h2 className="text-3xl mb-4">Cadastre-se</h2>
                        <p className="mb-4">
                            Crie sua conta, em menos de um minuto.
                        </p>
                        <form action="#" onSubmit={handleFormSubmit}>
                            <div className="grid grid-cols-2 gap-5">
                                <input type="text" placeholder="Nome" className="border border-gray-400 py-1 px-2" id='name' name='name' value={formData.name} onChange={handleInputChange} />
                                <input type="text" placeholder="Sobrenome" className="border border-gray-400 py-1 px-2" id='fullname' name='fullname' value={formData.fullname} onChange={handleInputChange} />
                            </div>
                            <div className="mt-5">
                                <input type="text" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full" id='email' name='email' value={formData.email} onChange={handleInputChange} />
                            </div>
                            <div className="mt-5">
                                <input type="password" placeholder="Senha" className="border border-gray-400 py-1 px-2 w-full" id='password' name='password' value={formData.password} onChange={handleInputChange} />
                            </div>
                            <div className="mt-5">

                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Enviar arquivo</label>
                                <input className="border border-gray-400 py-1 px-2 w-full" aria-describedby="user_avatar_help" id="user_avatar" accept="application/pdf" type="file" />
                                <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">* Somente aceitos arquivo em formato PDF</div>
                            </div>
                            <div className="mt-5">
                                <input type="checkbox" className="border border-gray-400" />
                                <span>
                                    Eu aceito os <a href="#" className="text-purple-500 font-semibold">Termos de uso</a> &  <a href="#" className="text-purple-500 font-semibold">Políticas de privacidade</a>
                                </span>
                            </div>
                            <div className="mt-5">
                                <button className="w-full bg-purple-500 py-3 text-center text-white" type="submit">Cadastrar</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div >

    )
}

export default Form