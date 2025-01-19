import React from 'react'

const page = () => {
  return (
    <div className=' mt-4 md:mt-8 flex flex-col border justify-center items-center'>
      <div className='border flex flex-col w-5/6 md:w-1/2  p-2 md:p-4'>
        <h1 className='flex text-3xl font-medium justify-center p-4 '>Privacy policy </h1>
        <p  className='text-sm'>This Privacy Policy outlines how your personal data is collected, used, shared, and retained when you interact with or make purchases from www.reef-print.co.uk (the [Site]). It ensures transparency about data practices and compliance with applicable laws, like the GDPR.</p>
      </div>
      <div className='border flex flex-col w-5/6 md:w-1/2  p-2 md:p-4'>
        <h1 className='flex text-xl'>1. Contact Information </h1>
        <p  className='text-sm'>If you have questions or concerns regarding your privacy or wish to file a complaint, you can reach out via email: enquiries@reef-print.co.uk.</p>
        <p  className='text-sm'>Why it matters: This provides customers with a clear communication channel to address their privacy concerns</p>
      </div>
      <div className='border flex flex-col w-5/6 md:w-1/2  p-2 md:p-4'>
        <h1 className='flex text-xl'>2. Collecting Personal Information </h1>
        <p  className='text-sm'>The Site gathers various types of personal information depending on your interaction:</p>
        <ul className='list-disc list-inside	 '>
        <h1>Device Information</h1>

            <ul className='list-disc list-inside	 '>
               <li className='text-sm italic'> What is collected: Browser version, IP address, time zone, cookie data, visited pages, search terms, and interactions with the Site.</li>
               <li className='text-sm italic'> Why it’s collected: To ensure the Site displays properly and optimize its performance through analytics.</li>
               <li className='text-sm italic'> How it’s collected: Using cookies, log files, web beacons, tags, and pixels.</li>
            </ul>

            <strong>Order Information</strong>
            <ul className='list-disc list-inside	 '>
               <li className='text-sm italic'> What is collected: Name, billing and shipping addresses, payment details (e.g., credit card info), email, and phone number.</li>
                <ul className='list-disc list-inside	 '>
                    <strong>Why it’s collected:</strong>
                    <ul className='list-disc list-inside	 '>
                       <li className='text-sm italic'>Fulfill your order.</li>
                       <li className='text-sm italic'>Process payments and arrange shipping.</li>
                       <li className='text-sm italic'>Send order confirmations and invoices.</li>
                       <li className='text-sm italic'>Prevent fraud and address customer preferences.</li>
                    </ul>

                </ul>
               <li className='text-sm italic'>Shared with: Stripe for payment processing and order management. </li>
            </ul>
        </ul>








      </div>
      <div className='border flex flex-col w-5/6 md:w-1/2  p-2 md:p-4'>
      <h1 className='flex text-xl'>3. Sharing Personal Information </h1>
      <p  className='text-sm'>Personal data may be shared with service providers to enable the operation of the Site, such as: Stripe who manages the processing the order postage</p>
      <ul className='list-disc list-inside	 '>
      </ul>
      </div>


      <div className='border flex flex-col w-5/6 md:w-1/2  p-2 md:p-4'>
        <h1 className='flex text-xl'>4. Using Personal Information </h1>
        <ul className='list-disc list-inside	 '>
          <strong>The Site uses personal information to:</strong>
           <li className='text-sm italic'>Offer products and process payments.</li>
           <li className='text-sm italic'>Ship orders and provide updates on order status.</li>
           <li className='text-sm italic'>Inform you about new products, services, or promotions.</li>
        </ul>
      </div>
      <div className='border flex flex-col w-5/6 md:w-1/2  p-2 md:p-4'>
        <h1 className='flex text-xl'>Lawful basis </h1>
        <p  className='text-sm'>Pursuant to the General Data Protection Regulation (“GDPR”), if you are a resident of the European Economic Area (“EEA”), we process your personal information under the following lawful bases:

Your consent;
The performance of the contract between you and the Site;
Compliance with our legal obligations;
To protect your vital interests;
To perform a task carried out in the public interest;
For our legitimate interests, which do not override your fundamental rights and freedoms.</p>
      </div>
      <div className='border flex flex-col w-5/6 md:w-1/2  p-2 md:p-4'>
        <h1 className='flex text-xl'>Retention
        </h1>
        <p  className='text-sm'>When you place an order through the Site, we will retain your Personal Information for our records unless and until you ask us to erase this information. For more information on your right of erasure, please see the ‘Your rights’ section below.</p>
      </div>
      <div className='border flex flex-col w-5/6 md:w-1/2  p-2 md:p-4'>
        <h1  className='flex text-xl'>Automatic decision-making</h1 >
        <p className='text-sm'>If you are a resident of the EEA, you have the right to object to processing based solely on automated decision-making (which includes profiling), when that decision-making has a legal effect on you or otherwise significantly affects you.

We do not engage in fully automated decision-making that has a legal or otherwise significant effect using customer data.

Our processor Shopify uses limited automated decision-making to prevent fraud that does not have a legal or otherwise significant effect on you.

Services that include elements of automated decision-making include:

Temporary blacklist of IP addresses associated with repeated failed transactions. This blacklist persists for a small number of hours.
Temporary blacklist of credit cards associated with blacklisted IP addresses. This blacklist persists for a small number of days.</p>
      </div>
      
    </div>
  )
}

export default page
