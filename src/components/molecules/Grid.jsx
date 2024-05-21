import Text from '../atoms/Text';
import mysql from '../../data/mysql';

function Grid() {
    return (
        
        mysql.products.map (product => {
            return (
                <>
                    <Text text={product.text}></Text>
                </>
            )
        }
    ))
}

export default Grid;