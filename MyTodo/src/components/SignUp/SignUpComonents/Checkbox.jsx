

export default function Checkbox({isChecked,setIsChecked,error}) {
  return (
    <>
      <input type="checkbox" id="agree" checked={isChecked} onChange={(e) =>{setIsChecked(e.target.checked)
      console.log('Checkbox checked:', e.target.checked)}
      } />
      
      <label htmlFor="agree"> I agree to the terms & conditions</label>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  )
}
