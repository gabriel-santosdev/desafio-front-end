'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ClimaData, WeatherData } from '../../../types/clima';

import chuvaIcon from '../../../public/assets/icons/chuva.png'
import solIcon from '../../../public/assets/icons/sol.png'
import dayBackground from '../../../public/assets/icons/background/day_background.jpg'
import nightBackground from '../../../public/assets/icons/background/night_background.jpg'
import Image from 'next/image';


function ClimaCard() {
    const [weatherData, setWeatherData] = useState<WeatherData>({} as WeatherData);
    const [backgroundImage, setBackgroundImage] = useState('./day_background.jpg')
    const apiKey = process.env.NEXT_PUBLIC_KEY_API;

    useEffect(() => {
        // Função para obter a localização do usuário
        const getUserLocation = () => {
            return new Promise<ClimaData>((resolve, reject) => {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            const { latitude, longitude } = position.coords;
                            resolve({ latitude, longitude });
                        },
                        (error) => {
                            reject(error);
                        }
                    );
                } else {
                    reject(new Error('Localização não suportada pelo Browser'));
                }
            });
        };

        // Função para obter dados do clima usando a API do OpenWeatherMap
        const getWeatherData = async () => {
            try {
                const { latitude, longitude } = await getUserLocation();
                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

                const response = await axios.get(apiUrl);
                setWeatherData(response.data);

            } catch (error) {
                console.error('Deu erro!', error);
            }
        };

        getWeatherData();
    }, [apiKey]);

    useEffect(() => {
        const currentHour = new Date().getHours();

        // Troca o plano de fundo para o noturno após as 18 horas no horário de Brasília
        if (currentHour >= 18) {
            setBackgroundImage('./night_background.jpg');
        }
    }, []);

    return (
        <div className="weather-card" data-testid="weather-card" >
            {weatherData && (
                <div className="flex justify-center items-center h-screen " style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
                    <div className="bg-white justify-center rounded-md p-16 ">
                        {weatherData?.main?.temp > 20 ? <Image src={solIcon} alt="Sol" width={55} height={55} className=' ml-16' /> : <Image src={chuvaIcon} alt="Chovendo" width={60} height={60} className=' ml-16' />}
                        <h2>Localização: {weatherData?.name}</h2>
                        <p>Temperatura: {weatherData?.main?.temp}°C </p>
                        {weatherData?.weather?.map((item, index) => (
                            <p key={index}>Descrição: {item?.description}</p>
                        ))}

                    </div>
                </div>
            )}
        </div>


    )

}
export default ClimaCard