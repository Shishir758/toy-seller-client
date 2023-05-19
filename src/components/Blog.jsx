import React from 'react';
import Footer from './Footer';
import Header from './Header';


const ref = React.createRef();

const blog = () => {

  return (
    <><Header></Header>
      <div className="mt-5">
        <h4 className="mb-5 text-center font-bold">
          FAQ of Assignment Eleven(11)
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 d-flex items-center mr-6 ml-6">

          <div className="col-md-6">
            <div className="w-100">
              <img
                className="w-100"
                src="https://october.eu/wp-content/uploads/2019/07/FAQs.svg"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6">

            <div className="mt-5 " ref={ref}>
              <h5 className='font-bold'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?.</h5>
              <p className="text-justify">
                Access Token: An access token is a credential that is issued by an authentication server (such as OAuth) upon successful authentication. It represents the authorization to access specific resources for a limited period of time. Access tokens are typically used to authenticate requests to protected APIs or services.

                Refresh Token: A refresh token is a credential that is also issued by the authentication server, along with the access token. Unlike the access token, the refresh token is long-lived and is used to obtain a new access token when the current one expires. It provides a way to obtain fresh access tokens without requiring the user to re-authenticate.

                Access Token:

                1. The client authenticates with the authentication server by providing valid credentials.

                2. Upon successful authentication, the server generates an access token and includes it in the response to the client.

                3. The client receives the access token and stores it securely (e.g., in memory or a secure storage mechanism).

                4. The client includes the access token in the headers or authorization section of subsequent requests to protected resources (APIs, services, etc.).

                5. The server verifies the access token with each request to ensure it is valid and not expired.

                6. If the access token is valid, the server grants access to the requested resource and processes the request accordingly.

                7. If the access token is invalid, expired, or lacks sufficient privileges, the server denies access and returns an appropriate response (e.g., 401 Unauthorized).


                Refresh Token:

                1. After the initial authentication, along with the access token, the server also issues a refresh token to the client.

                2. The client securely stores the refresh token, typically in an HTTP-only secure cookie or another secure storage mechanism.
                
                3. When the access token expires (typically after a short period), the client sends a request to the authentication server to obtain a new access token.

                4. The client includes the refresh token in the request to the server.

                5. The server verifies the refresh token to ensure it is valid and associated with a valid session.

                6. If the refresh token is valid, the server generates and returns a new access token to the client.

                7. The client receives the new access token and replaces the expired one with the new one for future API requests.

                8. This process repeats whenever the access token expires, allowing the client to obtain new access tokens without requiring the user to re-authenticate.


                The use of access tokens and refresh tokens improves security by limiting the lifespan of access tokens and allowing clients to obtain new ones without exposing the user's credentials every time. Access tokens have a short lifespan, reducing the window of opportunity for potential attackers to misuse them. Refresh tokens, on the other hand, are long-lived and stored securely to obtain new access tokens when needed, minimizing the risk of unauthorized access.
              </p>
              <br></br>
              <h5 className='font-bold'>2. How to validate React props using PropTypes?</h5>
              <p className="text-justify">
                React PropTypes validators:<br />
                1. any : The prop can be of any data type.<br />
                2. bool : The prop should be a Boolean.<br />
                3. number : The prop should be a number.<br />
                4. string : The prop should be a string.<br />
                5. func : The prop should be a function.<br />
                6. array : The prop should be an array.<br />
                7. object : The prop should be an object.
              </p>
              <br></br>
              <h5 className='font-bold'>3. Tell us the difference between nodejs and express js.</h5>
              <p className="text-justify">
                Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".
              </p>
              <br></br>
              <h5 className='font-bold'>4.What is MongoDB aggregate and how does it work?</h5>
              <p className="text-justify">
                Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline
              </p>
              <br></br>

            </div>
          </div>
        </div>






      </div>
      <Footer />


    </>
  );
};

export default blog;