import React from 'react'

const ApplicationFormSection = () => {
  return (
    <div>
        <div id='application-form-section'>
            <div className='application-form-title'>Application Form</div>
            <div>
                <form id='application-form'>
                    <div className='form-row-main'>
                        <div className='form-row'>
                            <label htmlFor='firstName' className='input-labels'>First Name:</label>
                            <input 
                                type='text'
                                id='firstName'
                                name='firstName'
                                placeholder='Mark'
                                className='form-control'
                            />
                        </div>
                        
                        <div className='form-row'>
                            <label htmlFor='lastName' className='input-labels'>Last Name:</label>
                            <input 
                                type='text'
                                id='lastName'
                                name='lasttName'
                                placeholder='Joe'
                                className='form-control'
                            />
                        </div>
                    </div>

                    <div className='form-row-main'>
                        <div className='form-row'>
                            <label htmlFor='whatsappNumber' className='input-labels'>Whatsapp Number:</label>
                            <input 
                                type='text'
                                id='whatsappNumber'
                                name='whatsappNumber'
                                placeholder='09137819540'
                                className='form-control'
                            />
                        </div>
                        
                        <div className='form-row'>
                            <label htmlFor='phoneNumber' className='input-labels'>Phone Number:</label>
                            <input 
                                type='text'
                                id='phoneNumber'
                                name='phoneNumber'
                                placeholder='09137819540'
                                className='form-control'
                            />
                        </div>
                    </div>

                    <div className='form-row-main'>
                        <div className='form-row'>
                            <label htmlFor='emailAddress' className='input-labels'>Email Address:</label>
                            <input 
                                type='text'
                                id='emailAddress'
                                name='emailAddress'
                                placeholder='markjoe@gmail.com'
                                className='form-control'
                            />
                        </div>
                        
                        <div className='form-row'>
                            <label htmlFor='location' className='input-labels'>Location:</label>
                            <input 
                                type='text'
                                id='location'
                                name='location'
                                placeholder='Alimosho, Lagos'
                                className='form-control'
                            />
                        </div>
                    </div>

                    <div className='form-row-main'>
                        <div className='form-row'>
                            <label htmlFor='hear' className='input-labels-textarea'>Where did you hear of us from?</label>
                            <textarea 
                                className='form-control-textarea'
                                id='hear'
                                name='hear'
                                placeholder='i.e Instagram'
                            ></textarea>
                        </div>
            
                    </div>

                    <div className='form-row-main'>
                        <div className='form-row-consent'>
                            <input type='checkbox'/>
                            <div className='consent-text'>I consent to receive communications from MentorNigeria Academy about personal growth
                                oppotunities, company and industry news, and other related content.
                            </div>
                        </div>
            
                    </div>

                    <div>
                        <button type='submit' className='submit-btn'>Apply Now</button>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default ApplicationFormSection