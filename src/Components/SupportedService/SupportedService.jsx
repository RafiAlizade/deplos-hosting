import './SupportedService.css'
import minecraftLogo from './../../assets/minecraft.svg'
import nodeLogo from './../../assets/nodejs.svg'
import pythonLogo from './../../assets/python.svg'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function SupportedService() {

    useEffect(() => {
        AOS.init();
      }, [])

    const serviceBase = [
        {
            serviceLogo: nodeLogo,
            serviceName: 'Node.js',
            serviceAddon: ['Discord', 'Telegram', 'Algorithms']
        },
        {
            serviceLogo: minecraftLogo,
            serviceName: 'Minecraft Bedrock',
            serviceAddon: ['Vanilla', 'Pmmp', 'Nukkit', 'PowerNukkit']
        },
        {
            serviceLogo: minecraftLogo,
            serviceName: 'Minecraft',
            serviceAddon: ['Vanilla', 'Sponge', 'Spigot', 'Forge', 'Fabric', 'Custom']
        },
        {
            serviceLogo: pythonLogo,
            serviceName: 'Python',
            serviceAddon: ['Discord', 'Telegram', 'Algorithms']
        },
    ]

  return (
    <section className="services">
        <div className="container_section">
            <div className="services__inner"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1200">
                <div className="services__left">
                    <div className="services__h2">Supported services</div>
                    <span className="services__description">We plan to add to this list in the future</span>
                </div>
                
                <div className="services__right">
                    {serviceBase.map(( {serviceLogo, serviceName, serviceAddon}, key) => (
                        <div className="services__box" key={key}>
                            <div className="services__box_left">
                                <img src={serviceLogo} alt="" className='services__photo' />
                            </div>

                            <div className="services__box_right">
                                <span className="services__name">
                                    {serviceName}
                                </span>

                                <ul className="services__list">
                                {serviceAddon.map((name , key) => (
                                        <li className="services__list_name" key={key}>{name}</li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default SupportedService