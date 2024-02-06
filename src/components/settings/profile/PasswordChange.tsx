import React, {useState} from 'react'
import {hiddenPassword, openPassword} from "../../../data/icons";
import {styleInput, styleLabelInput} from "../../../data/styles";


interface PasswordChangeProps {
    onClose: () => void

}
export function PasswordChange({onClose} : PasswordChangeProps){

    const [hidePassword, setHidePassword] = useState({old:true, new1:true, new2:true});
    const [passwordObj, setPasswordObj] = useState({old:"", new1:"", new2:""})


    return(
        <>
            <div
                className="fixed bg-black/50 top-0 z-30 right-0 left-0 bottom-0"
                onClick={onClose}
            />

            <div className="w-[500px] p-5 z-30  rounded bg-white absolute top-1/3 left-1/2 -translate-x-1/2 px-8">
                <span className="font-bold text-lg">Изменение пароля</span>
                <div className="flex flex-col py-1">
                    <div className="flex flex-row justify-between items-center py-1">
                        <span className={styleLabelInput}>Старый пароль: <span className="text-red-500 font-bold">*</span></span>
                        <div className="flex flex-row justify-end">
                            <input
                                className={styleInput + "w-64"}
                                type={hidePassword.old ? "password" : ""}
                                // onChange={event => setUsername(event.target.value)}
                                // value={passwordObj.old}
                            />
                            <div className="absolute mr-1 mt-1">
                                {hidePassword.old &&
                                    <div onClick={() => setHidePassword({...hidePassword, old : false})}>
                                        {openPassword}
                                    </div>
                                }
                                {!hidePassword.old &&
                                    <div onClick={() => setHidePassword({...hidePassword, old : true})}>
                                        {hiddenPassword}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center py-1">
                        <span className={styleLabelInput}>Новый пароль: <span className="text-red-500 font-bold">*</span></span>
                        <div className="flex flex-row justify-end">
                            <input
                                className={styleInput + "w-64"}
                                type={hidePassword.new1 ? "password" : ""}
                                // onChange={event => setUsername(event.target.value)}
                                // value={profile?.username}
                            />
                            <div className="absolute mr-1 mt-1">
                                {hidePassword.new1 &&
                                    <div onClick={() => setHidePassword({...hidePassword, new1 : false})}>
                                        {openPassword}
                                    </div>
                                }
                                {!hidePassword.new1 &&
                                    <div onClick={() => setHidePassword({...hidePassword, new1 : true})}>
                                        {hiddenPassword}
                                    </div>
                                }
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-row justify-between items-center py-1">
                        <span className={styleLabelInput}>Подтвердить новый пароль: <span className="text-red-500 font-bold">*</span></span>
                        <div className="flex flex-row justify-end">
                            <input
                                className={styleInput + "w-64"}
                                type={hidePassword.new2 ? "password" : ""}
                                // onChange={event => setUsername(event.target.value)}
                                // value={profile?.username}
                            />
                            <div className="absolute mr-1 mt-1">
                                {hidePassword.new2 &&
                                    <div onClick={() => setHidePassword({...hidePassword, new2 : false})}>
                                        {openPassword}
                                    </div>
                                }
                                {!hidePassword.new2 &&
                                    <div onClick={() => setHidePassword({...hidePassword, new2 : true})}>
                                        {hiddenPassword}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-start items-center bg-white my-2">
                    <button  className="text-xs h-7 font-medium px-2 py-1 rounded bg-blue-700 text-white hover:bg-blue-800">
                        Сохранить
                    </button>
                    <button onClick={onClose} className="px-2 mx-2 h-7  rounded text-xs font-medium shadow-sm border border-slate-400 hover:bg-gray-200">
                        Закрыть
                    </button>

                </div>
            </div>
        </>
    )
}