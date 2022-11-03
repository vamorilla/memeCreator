import React, {useState} from 'react';
import html2canvas from 'html2canvas';
import styles from './Meme.module.css';

const Meme = () => {
  
  const [firstInput, setFirstInput] = useState('');  
  const [secondInput, setSecondInput] = useState('');
  const [image, setImage] = useState('');
    
  const onChangeFirstInput = (e) => {
    setFirstInput(e.target.value);
  }

  const onChangeSecondInput = (e) => {
    setSecondInput(e.target.value);
  }

  const onChangeImage = (e) => {
    console.log(e.target.value);
    setImage(e.target.value);
  }

  const onClickExportar = (e) => {
    console.log('Exportando...');

    html2canvas(document.querySelector('#meme')).then(canvas => {
        let img = canvas.toDataURL('image/jpg');
        console.log(img)
        let link = document.createElement('a');
        link.download = '1.jpg';
        link.href = img;
        link.click();
    })
  }

  return (
    <div className={styles.mainContainer}>
        <select onChange={onChangeImage} className={styles.select}>
            <option value="1">Bebé enojado</option>
            <option value="2">Di Caprio</option>
            <option value="3">Esqueleto con traje</option>
            <option value="4">Mono</option>
            <option value="5">Nena</option>
            <option value="6">Monopatín</option>
        </select>

        <div className={styles.inputContainer}>
            <input onChange={onChangeFirstInput} type='text' placeholder='Primera linea' />
            <input onChange={onChangeSecondInput} type='text' placeholder='Segunda linea' />
        </div>

        <div className={styles.memeContainer} id= 'meme'>
            <span>{secondInput}</span>
            <span>{firstInput}</span>
            <img src={ '/images/' + image + '.jpg' } alt= 'imagen de meme' />
        </div>

        <button className={styles.btn} onClick={onClickExportar}>Descargar</button>
    </div>
  )
}

export default Meme;