import React from 'react';
import useTitle from '../useTitle';
import Footer from './Footer';
import Header from './Header';


const ref = React.createRef();

const blog = () => {
  useTitle('Blog')
  return (
    <><Header></Header>
      <h4 className="mb-5 text-center mt-6 font-bold">
        FAQ of Assignment Eleven(11)
      </h4>
      <div className="grid  items-center md:mx-20 lg: lg:mx-20 mx-6 text-justify">

        <div className="mt-5 ">


        <p><b>1. What is an access token and refresh token?</b></p>
          <div className=' justify-between gap-8 md:flex lg:flex flex-row '>
            <div className='md:w-1/2 lg:md:w-1/2'>
              
              <p><b>* Access Token:</b><br></br></p>
              <p>
                An access token is a credential that is issued by an authentication server (such as OAuth) upon successful authentication. It represents the authorization to access specific resources for a limited period of time. Access tokens are typically used to authenticate requests to protected APIs or services.</p>
            </div>


            <div className='md:w-1/2 lg:md:w-1/2 mt-4'>
              <p><b>* Refresh Token:</b><br></br></p>
              <p>A refresh token is a credential that is also issued by the authentication server, along with the access token. Unlike the access token, the refresh token is long-lived and is used to obtain a new access token when the current one expires. It provides a way to obtain fresh access tokens without requiring the user to re-authenticate.</p></div>
          </div>
          <br></br>

          <p><b>== How do access token and refresh token work?</b></p>
          <div className=' justify-between gap-8 md:flex lg:flex flex-row '>
            
            <div className='md:w-1/2 lg:md:w-1/2'> <p><b>* Access Token:</b><br></br></p>

              1. The client authenticates with the authentication server by providing valid credentials.<br></br>
              <br></br>
              

              2. Upon successful authentication, the server generates an access token and includes it in the response to the client.<br></br>
              <br></br>

              3. The client receives the access token and stores it securely (e.g., in memory or a secure storage mechanism).<br></br>
              <br></br>

              4. The client includes the access token in the headers or authorization section of subsequent requests to protected resources (APIs, services, etc.).<br></br>
              <br></br>

              5. The server verifies the access token with each request to ensure it is valid and not expired.<br></br>
              <br></br>

              6. If the access token is valid, the server grants access to the requested resource and processes the request accordingly.<br></br>
              <br></br>

              7. If the access token is invalid, expired, or lacks sufficient privileges, the server denies access and returns an appropriate response (e.g., 401 Unauthorized).<br></br>
              <br></br></div>
            <div className='md:w-1/2 lg:md:w-1/2'>  <p><b>* Refresh Token:</b><br></br></p>


              1. After the initial authentication, along with the access token, the server also issues a refresh token to the client.
              <br></br>
              <br></br>

              2. The client securely stores the refresh token, typically in an HTTP-only secure cookie or another secure storage mechanism.<br></br>
              <br></br>

              3. When the access token expires (typically after a short period), the client sends a request to the authentication server to obtain a new access token.<br></br>
              <br></br>

              4. The client includes the refresh token in the request to the server.<br></br>
              <br></br>

              5. The server verifies the refresh token to ensure it is valid and associated with a valid session.<br></br>
              <br></br>

              6. If the refresh token is valid, the server generates and returns a new access token to the client.<br></br>
              <br></br>

              7. The client receives the new access token and replaces the expired one with the new one for future API requests.<br></br>
              <br></br>

              8. This process repeats whenever the access token expires, allowing the client to obtain new access tokens without requiring the user to re-authenticate.<br></br>
              <br></br>
            </div>
          </div>

          <div><p><b>== where should we store access token and refresh token on the client-side??</b></p>
            <p>You can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code. This is also known as the backend for frontend (BFF) proxy.
            </p></div>
            <br></br>

            <p><b>2. Compare SQL and NoSQL databases?</b></p>
          <div className=' justify-between gap-8 md:flex lg:flex flex-row '>
            
            <div className='md:w-1/2 lg:md:w-1/2'> <p><b>* SQL Databases:</b><br></br></p>

              1. Structure: SQL databases are based on a structured data model, where data is organized into tables with predefined schemas. Each table consists of rows and columns, and the relationships between tables are defined by foreign keys.<br></br>
              <br></br>
              

              2. Schema and Flexibility: SQL databases enforce a rigid schema, meaning that the schema must be defined upfront, and any changes require altering the schema. This provides strong data consistency and integrity.<br></br>
              <br></br>

              3. Query Language: SQL databases use SQL (Structured Query Language) for querying and manipulating data. SQL provides a standardized way to interact with the database and perform complex queries using JOINs, aggregations, and other powerful features.<br></br>
              <br></br>

              4. ACID Compliance: SQL databases are typically ACID-compliant, ensuring Atomicity, Consistency, Isolation, and Durability. These properties guarantee data integrity and reliability.<br></br>
              <br></br>

              5. Vertical Scalability: SQL databases usually scale vertically by upgrading the hardware (e.g., adding more powerful servers) to handle increased workload.<br></br>

             <br></br>
              <br></br></div>
            <div className='md:w-1/2 lg:md:w-1/2'>  <p><b>* NoSQL Databases:</b><br></br></p>


              1. Structure: NoSQL databases are based on a flexible and schema-less data model. Data is stored in various formats like key-value pairs, documents, column families, or graphs, depending on the NoSQL database type.
              <br></br>
              <br></br>

              2. Schema and Flexibility: NoSQL databases offer flexible schemas, allowing for dynamic changes in the structure of the data without requiring modifications to the entire database. This offers greater agility and scalability.<br></br>
              <br></br>

              3. Query Language: NoSQL databases use various query languages specific to their database type. Some NoSQL databases support SQL-like query languages, while others provide APIs for data retrieval and manipulation.<br></br>
              <br></br>

              4. Scalability: NoSQL databases excel in horizontal scalability, distributing data across multiple servers or clusters. They are designed to handle large-scale data sets and high-volume traffic by adding more commodity hardware to the cluster.<br></br>
              <br></br>

              5. CAP Theorem: NoSQL databases often adhere to the CAP theorem, which states that a distributed system can only guarantee two out of three properties: consistency, availability, and partition tolerance. NoSQL databases typically prioritize availability and partition tolerance over strict consistency.<br></br>
              <br></br>
              <br></br>
            </div>
          </div>

          <p><b>3. What is Express JS and Nest JS ?</b></p>
          <div className=' justify-between gap-8 md:flex lg:flex flex-row '>
            <div className='md:w-1/2 lg:md:w-1/2'>
              
              <p><b>* Express JS:</b><br></br></p>
              <p>
              Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.</p>
            </div>
            <br></br>
            <div className='md:w-1/2 lg:md:w-1/2'>
              
              <p><b>* Nest JS:</b><br></br></p>
              <p>Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.</p></div>
          </div>
          <br></br>
          <br></br>

          <p><b>4. What is MongoDB aggregate and how does it work?</b></p>
          <div className=' justify-between gap-8 md:flex lg:flex flex-row '>
            <div className='md:w-1/2 lg:md:w-1/2'>
              
              <p><b>* MongoDB aggregate:</b><br></br></p>
              <p>
              MongoDB's aggregation framework is a feature that allows you to perform advanced data processing and analysis on MongoDB collections. It provides a way to perform complex queries, transformations, and calculations on the data within the database. The aggregation pipeline, a key component of the aggregation framework, enables you to apply a series of stages to the data to filter, group, sort, project, and aggregate results. It offers a flexible and efficient approach to retrieve and manipulate data in MongoDB.</p>
            </div>

            <br></br>
            <div className='md:w-1/2 lg:md:w-1/2'>
              <p><b>* How MongoDB aggregation works:</b><br></br></p>
              <p>the MongoDB aggregation pipeline allows you to process and analyze data in MongoDB collections using a sequence of stages. Each stage performs specific operations on the data and passes the results to the next stage. The pipeline can include stages for matching, filtering, grouping, sorting, transforming, and more. It provides a powerful way to perform complex data manipulations and calculations in MongoDB.</p></div>
          </div>
        </div>
      </div>

      <Footer />


    </>
  );
};

export default blog;