import React from 'react'
import '../Assets/Port.css'
import { Link } from 'react-router-dom'

const Port = () => {
  return (
    <div>
        <div className='folio'>
            <div className='folio-div'>
                <div className='images-container'>
                    <div className='image-links'>
                        <img src='images/covmind.jpg'/>

                        <div className='port-links'>
                            <h3>COVMIND INTERNATIONAL EDUCATION</h3>
                            <Link to='https://covmind.com/'>Www.Covmind.Com</Link>
                        </div>
                    </div>

                    <div className='image-links'>
                        <img src='images/opera1.png'/>
                        <div className='port-links'>
                            <h3>OPERANIYI FX COPY</h3>
                            <Link to='/www.Covmind.Com'>Www.Operaniyifxcopy.Com</Link>
                        </div>
                    </div>

                    <div className='image-links'>
                        <img src='images/olakem1.png'/>
                        <div className='port-links'>
                            <h3>OLAKEM VENTURES</h3>
                            <Link to=''>Www.Olakemventures.Com</Link>
                        </div>
                    </div>

                    <div className='image-links'>
                        <img src='images/bbPeace.png'/>
                        <div className='port-links'>
                            <h3>BBFORPEACE</h3>
                            <Link to=''>Www.Bbforpeace.Org</Link>
                        </div>
                    </div>

                    <div className='image-links'>
                        <img src='images/zedz.jpg'/>
                        <div className='port-links'>
                            <h3>ZEDZFOODS</h3>
                            <Link to=''>Www.Zedzfoods.Com</Link>
                        </div>
                    </div>

                    <div className='image-links'>
                        <img src='images/ayogif.jpg'/>
                        <div className='port-links'>
                            <h3>AYOGIF</h3>
                            <Link to=''>Www.Ayogif.Com</Link>
                        </div>
                    </div>

                    <div className='image-links'>
                        <img src='images/understand.png'/>
                        <div className='port-links'>
                            <h3>UNDERSTAND BUSINESS</h3>
                            <Link to=''>Wwww.Understandbusiness.Com</Link>
                        </div>
                    </div>

                    <div className='image-links'>
                        <img src='images/AgricMatters.png'/>
                        <div className='port-links'>
                            <h3>AGRIC MATTERS</h3>
                            <Link to=''>Www.Agricmatters.Com</Link>
                        </div>
                    </div>

                    <div className='image-links'>
                        <img src='images/Timeshoppy.png'/>
                        <div className='port-links'>
                            <h3>TIMESHOPPY</h3>
                            <Link to=''>Www.Timeshoppy.Com</Link>
                        </div>
                    </div>

                    <div className='image-links'>
                        <img src='images/JetMall.jpg'/>
                        <div className='port-links'>
                            <h3>JET MALL</h3>
                            <Link to=''>Www.Jetmsllng.Com</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Port