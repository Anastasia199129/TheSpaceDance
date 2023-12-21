interface Props {
  id:string
  value:string|number
  type:string
  placeholder:string
  className:string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props:Props) {
  return <input {...props}/>
}
