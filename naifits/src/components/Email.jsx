import React, { useState } from 'react';

const Email = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the email, such as sending it to a server or handling it in the parent component.
        console.log('Email submitted:', email);
        // You can also clear the input field after submission.
        setEmail('');
    };

  return (
    <form onSubmit={handleSubmit} className='w-full h-16 flex rounded-2xl overflow-hidden '>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter your email address..."
        required
        className='w-3/4 text-field'
      />
      <button type="submit" className='w-1/4 h-full fancyBtn text-xl gilM'>Submit</button>
    </form>
  )
}

export default Email

