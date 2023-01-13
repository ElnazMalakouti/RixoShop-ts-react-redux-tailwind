import { DigitConvertor } from 'persian-digit-tools';
import { useEffect } from 'react';
import './App.css';
import ProductCard from './pages/ProductsList/components/ProductCard';

function App() {

  // useEffect(()=> {
  //   String.prototype.toPersinaDigit = function(){ 
  //     var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹']; return this.replace(/[0-9]/g, function(w){ return id[+w] }); 
  //   }
  // },[])

  let str = 'hello 123.sda31 this1233is a complex 1';
  console.log(DigitConvertor.toPersian(str));

  return (
    <div className='flex justify-center items-center'>   
      <ProductCard
        productImage={"pics/products/Image 20.png"}
        productName={"NVIDIA GeForce RTX 2080 Ti Founders Edition"}
        previousPrice={19635000}
        discountPercent={20}
        productPrice={18230000}
      />
    </div>
  );
}

export default App;
