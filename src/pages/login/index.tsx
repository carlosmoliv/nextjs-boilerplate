import React from 'react';
import Image from 'next/image';

import { Creators } from 'src/store/ducks/auth';

import { useDispatch, useSelector } from 'react-redux';
import { IReduxState } from 'src/store';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const handleAuth = () => {
    dispatch(Creators.authenticated('token_de_authenticacao'));
    alert('Login Efetuado com sucesso');
  };

  const handleLogout = () => {
    dispatch(Creators.logout());
  };

  const isAuthenticated = useSelector((state: IReduxState) => state.auth);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r  bg-purple-800 from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-gray-800 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <Image
                src="/logo-white.png"
                alt="iNova Logo"
                layout="fixed"
                height={100}
                width={180}
              />
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-purple-100 sm:text-lg sm:leading-7">
                <ul className="list-disc space-y-2">
                  <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-cyan-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="ml-2">
                      Acesse agora mesmo nosso site{' '}
                      <code className="text-sm font-bold text-purple-300">
                        www.inovany.com.br
                      </code>
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-cyan-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="ml-2">Landing Pages</p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-cyan-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="ml-2">Plataformas</p>
                  </li>
                </ul>
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                {(isAuthenticated.token && (
                  <>
                    <button
                      onClick={() => handleLogout()}
                      className="hover:bg-purple-600 p-1 rounded-md focus:outline-none"
                    >
                      Logout
                    </button>
                    <p className="text-sm text-purple-300">
                      Seu token de authenticação é = {isAuthenticated.token}
                    </p>
                  </>
                )) || (
                  <>
                    <p className="text-sm text-purple-300">
                      Você ainda não está logado{' '}
                    </p>
                    <button
                      onClick={() => handleAuth()}
                      className="hover:bg-purple-600 p-1 rounded-md focus:outline-none"
                    >
                      Logar
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
