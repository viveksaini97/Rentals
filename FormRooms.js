import React, {  useState } from 'react'
import axios from 'axios'; // Import axios

function FormRooms(){
    const [formData, setFormData] = useState({
        media: "",
        description: "",
        price: "",
        address: "",
        propertySummary: {
            buildingType: "",
            stories: "",
            roomType: "",
            distanceToCollege: "",
            nearestBusStop: "",
            utilities: false,
            furnishing: "",
            amenities: []
        },
        sellerInformation: {
            name: "",
            email: "",
            phone: ""
        }
    });

    function changeHandler(event){
        console.log(event)
        const {name,value,checked,type}=event.target;
        setFormData((prev)=>({...prev,[name]:type==="checkbox"?checked:value}));
    }

    function changeHandler1(event) {
        const { name, value, checked, type } = event.target;
        if (name.includes("propertySummary") || name.includes("sellerInformation")) {
            const [parent, child] = name.split(".");
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: type === "checkbox" ? checked : value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }));
        }
    }
    function submitHandler(event){
        event.preventDefault();

        // Send form data to backend using axios
        axios.post('http://localhost:3000/properties', formData)
            .then(response => {
                console.log('Property data sent successfully');
                // Optionally, you can redirect the user or show a success message here
            })
            .catch(error => {
                console.error('Error sending property data:', error);
            });

    }

    return (
        <div>
            <form onSubmit={submitHandler} className='w-[60%] mx-auto flex-col '>
                <div className=' flex justify-between w-full pt-3'>
                    <label htmlFor='' className='w-[20%]'>Name</label>
                    <input
                        type='text'
                        name='sellerInformation.name'
                        placeholder='Bebicha'
                        value={formData.sellerInformation.name}
                        className='w-[80%] rounded-lg bg-slate-100 text-center'
                        onChange={changeHandler1}
                    />  
                </div>
                

                <div className='flex justify-between w-full pt-3 '>
                        <label className='w-[20%] '>Phone Number</label>
                        <input
                             type='number'
                            name='sellerInformation.phone'
                            value={formData.sellerInformation.phone}
                            className='w-[80%] rounded-lg bg-slate-100 text-center'
                            onChange={changeHandler1}
                        />
                </div>
                <div className='flex justify-between w-full pt-3'>
                        <label className='w-[20%]'>Email</label>
                        <input
                             type='email'
                            name='sellerInformation.email'
                            value={formData.sellerInformation.email}
                            className='w-[80%] rounded-lg bg-slate-100 text-center'
                            onChange={changeHandler1}
                        />
                </div>

                <div className='flex justify-between w-full pt-3 '>
                        <label className='w-[20%]'>Price</label>
                        <input
                             type='number'
                            name='price'
                            value={formData.price}
                            className='w-[80%] rounded-lg bg-slate-100 text-center'
                            onChange={changeHandler1}
                        />
                </div>
                <div className='flex justify-between w-full pt-3'>
                        <label className='w-[20%]'>Address</label>
                        <input
                             type='text'
                            name='address'
                            value={formData.address}
                            className='w-[80%] rounded-lg bg-slate-100 text-center'
                            onChange={changeHandler1}
                        />
                    </div>

                <div className='flex w-full pt-3 '>
                    <div className='flex w-[50%] '>
                        <label>Stories</label>
                        <select  
                            name="propertySummary.stories"
                            value={formData.propertySummary.stories}
                            onChange={changeHandler1}
                            className="outline-none w-[50%] mx-auto rounded-lg bg-slate-100 text-center mr-10">

                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4+</option>


                        </select>
                    </div>

                    <div className='flex w-[50%] '>
                        <label className='mr-2 w-[50%]'>Room Type</label>
                        <select  
                            name="propertySummary.roomType"
                            value={formData.propertySummary.roomType}
                            onChange={changeHandler1}
                            className=" outline-none w-full mx-auto rounded-lg bg-slate-100 text-center ">

                                <option>Only Private</option>
                                <option>Sharing</option>
                                


                        </select>
                    </div>
                </div>

                <br/>

                <div className='flex w-full pt-3 '>
                    <div className='flex w-[50%] '>
                            <label>furnishing</label>
                            <select  
                                name="propertySummary.furnishing"
                                value={formData.propertySummary.furnishing}
                                onChange={changeHandler1}
                                className="outline-none w-[50%] mx-auto rounded-lg bg-slate-100 text-center mr-10">

                                    <option>Yes</option>
                                    <option>No</option>


                            </select>
                    </div>
                    <div className='flex w-[50%] '>
                        <label className='mr-2 w-[50%]'>Utilities</label>
                        <select  
                            name="propertySummary.utilities"
                            value={formData.propertySummary.utilities}
                            onChange={changeHandler1}
                            className=" outline-none w-full mx-auto rounded-lg bg-slate-100 text-center ">

                                <option value="Yes">Yes</option>
                                <option value="No">No</option>


                        </select>
                    </div>
                </div>
                

                <div className='flex w-full pt-3 '>
                    <div className='flex w-[50%] '>
                            <label>Distance To College</label>
                            <input className="outline-none w-[50%] mx-auto rounded-lg bg-slate-100 text-center mr-10"
                                type='number'
                                name='propertySummary.distanceToCollege'
                                value={formData.propertySummary.distanceToCollege}
                                onChange={changeHandler1}
                            />
                    </div>
                    <div className='flex w-[50%] '>
                        <label className='mr-2 w-[50%]'>Nearest Bus</label>
                        <input 
                            name="propertySummary.nearestBusStop"
                            value={formData.propertySummary.nearestBusStop}
                            onChange={changeHandler1}
                            className=" outline-none w-full mx-auto rounded-lg bg-slate-100 text-center ">

                                


                        </input>
                    </div>

                    
                </div>

                <div className='flex justify-between w-full pt-3'>
                        <label className=''>Building type</label>
                        <select  
                            name="propertySummary.buildingType"
                            value={formData.propertySummary.buildingType}
                            onChange={changeHandler1}
                            className="w-[80%] rounded-lg bg-slate-100 text-center">

                                <option>Apartment</option>
                                <option>House</option>
                                <option>Room</option>
                                <option>Other</option>


                        </select>
                </div>

                <div className=' flex justify-between w-full pt-3'>
                    <label htmlFor='' className='w-[20%]'>Media</label>
                    <input
                        type='text'
                        name='media'
                        
                        value={formData.media}
                        className='w-[80%] rounded-lg bg-slate-100 text-center'
                        onChange={changeHandler1}
                    />  
                </div>
                
                
                <button className='w-full mt-2 bg-blue-300 rounded-fullcol'>Submit</button>
            </form>
        </div>
    )
}

export default FormRooms;