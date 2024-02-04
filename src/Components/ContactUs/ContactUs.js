import React ,{useState,useEffect}from "react";
import './ContactUs.css';

export const ContactUs = () => {
    const initialValue ={userName:'',userPhone:'',userMessage :''}
    const [formValue , setFormValue] = useState(initialValue);
  

    const handleChange =(e)=>{
        const {name , value }= e.target;
        setFormValue({...formValue , [name] : value});
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(formValue);
          
          };
          useEffect(()=>{
            localStorage.setItem('formValues',JSON.stringify(formValue) );
          },[formValue]);


    return (
        <>
            <section className="contactus">
                <div className="border border-1 mt-5">
                    <h1 className="text-warning">CONTACT <span className="text-white">WITH US</span></h1>
                    <h4 className="text-warning mb-3 mt-2">PLEASE FILL THIS FORM !!</h4>
                    <form onSubmit={handleSubmit}>

                            <div className="form-group">
                                <input type="text" required maxlength="50" className="form-control"  name="userName" value={formValue.userName} onChange={handleChange} placeholder="Name"/>
                            </div>
                            
                            <div className="form-group">
                                <input type="tel" required maxlength="50" className="form-control" name="userPhone" value={formValue.userPhone} onChange={handleChange}placeholder="Phone" />
                            </div>

                        <div className="form-group mb-3">
                            <textarea className="form-control"  rows="5" name="userMessage" value={formValue.userMessage} onChange={handleChange}placeholder="Any Comment"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary px-4 btn-lg">Submit</button>
                    </form>
                </div>

            </section>
        </>
    )
}
