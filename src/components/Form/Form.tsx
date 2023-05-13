'use client'

import {InputType, SchemaType} from "@/utils/type";
import Input from "@/components/Form/Input/Input";
import Button, {ButtonType} from "@/components/Button/Button";


interface FormProps {
    schema: SchemaType
    handleCallback: (name: string, value: string) => void
}

/**
 * This component is not finished yet, it's just a draft.
 * The idea is to pass a schema to this component, and
 * it will render the form based on the schema.
 * @param schema
 * @param handleCallback
 * @constructor
 */

export default function Form({schema, handleCallback}: FormProps) {
    return (
        <>
            {
                Object.values(schema ?? {})?.map((item, index) => {
                    if (item.type === InputType.TEXT) {
                        return <Input name={item.name}
                                      placeholder={item.name}
                                      key={`form-${index}-${item.name}`}
                                      type={'text'}
                                      onChange={(e: { target: { value: any; }; }) => handleCallback(item.name, e.target.value)}
                        />
                    } else {
                        return <Button key={`form-${index}-${item.name}`}
                                       handleClick={item?.handleClick}
                                       type={ButtonType.SECONDARY}
                                       title={item.name}
                                       style={{padding: '16px'}}
                        />
                    }
                })
            }
        </>
    )
}
