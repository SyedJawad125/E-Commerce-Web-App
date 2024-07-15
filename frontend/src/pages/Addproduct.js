import {React,useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../context/AxiosInstance'


const Addproduct = () => {

    const navigate = useNavigate()

  const [name, setname] = useState('')
  const [description, setdescription] = useState('')
  const [price, setprice] = useState('')
  const [image, setimage] = useState(null)
  const [prod_has_category, setprod_has_category] = useState('')

  const [categoryRecords, setcategoryRecords] = useState([])

  useEffect(()=>{
    // For dropdown list
    const fetchMenu = async () =>{
      const res = await axiosInstance.get('/ecommerce/category') 
      try{
          if (res){
            setcategoryRecords(res.data.data.data)
          }
      }
      catch (error){
          console.log('error occured', error)
      }
  }
  fetchMenu();
 

  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name',name)
      formData.append('description',description)
      formData.append('price',price)
      formData.append('image',image)
      formData.append('prod_has_category',prod_has_category)

        // const payload = {"name":name , "description":description,"restaurant":restaurant }
        
        const response = await axiosInstance.post('/ecommerce/product', formData , {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        if (response){
        console.log('Response:', response.data);
        navigate('/product', {state: {message: 'Product Added!'}})
        }
        // Handle success
    } catch (error) {
        console.error('Error:', error);
        // Handle error
    }
    };
  return (
    <div class='container' style={{ marginLeft: '200px' }}>
        <h2 class='mt-4'>Add MenuItem Here :</h2>
      <form class='mt-3' onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="name" class="form-control" id="name" aria-describedby="name"  value={name}
            onChange= {e => setname(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <input type="text" class="form-control" id="description" aria-describedby="description" value={description}
            onChange= {e => setdescription(e.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Price</label>
          <input type="text" class="form-control" id="price" aria-describedby="price" value={price}
            onChange= {e => setprice(e.target.value)}/>
        </div>
        <div class="form-group">
                <label for="image">Upload Image</label>
                <input type="file" class="form-control-file" id="image" onChange={(e)=> setimage(e.target.files[0])}/>
          </div> 

        <select class="form-select" aria-label="Default select example" onChange={e => setprod_has_category(e.target.value)}>
            <option selected>Select Category</option>

              { categoryRecords ?
                categoryRecords.map(item => (
                  <option value={item.id} key={item.id}>{item.name}</option>
                ))
                :
                <option selected>No Records</option>
              }
        </select>

        <button type="submit" class="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  )
}

export default Addproduct