import {ProductGrid, Box, Caixa, Footer} from "./styled"
import product from "./objects"
// import icone2 from "../../assets/images/products/icone2"
// import icone3 from "../../assets/images/products/icone3"
// import icone4 from "../../assets/images/products/icone4"




export default function Product() {

    return(
        <Caixa>
        <ProductGrid id="product1">
            <div div1>
                <Box>
                    <ul>
                        <li><img src= {`${product[0].img}`} alt="produto1"/></li>
                        <li>{product[0].titulo}</li>
                        <li className="anterior"> {product[0].precoAnterior}</li>
                        <li className="icones">{product[0].precoAtual}</li>
                    </ul>

                </Box>
                <Box>
                    <ul>
                        <li><img src= {`${product[3].img}`} alt="produto4"/></li>
                        <li>{product[3].titulo}</li>
                        <li className="anterior"> {product[3].precoAnterior}</li>
                        <li>{product[3].precoAtual}</li>
                    </ul>

                </Box>
            </div >
            <div div2>
                <Box>
                    <ul>
                        <li><img src= {`${product[1].img}`} alt="produto2"/></li>
                        <li>{product[1].titulo}</li>
                        <li className="anterior"> {product[1].precoAnterior}</li>
                        <li>{product[1].precoAtual}</li>
                    </ul>

                </Box>
                <Box>
                    <ul>
                        <li><img src= {`${product[4].img}`} alt="produto5"/></li>
                        <li>{product[4].titulo}</li>
                        <li className="anterior"> {product[4].precoAnterior}</li>
                        <li>{product[4].precoAtual}</li>
                    </ul>
                </Box>
            </div>
            <div div3>
                <Box>
                    <ul>
                        <li><img src= {`${product[2].img}`} alt="produto3"/></li>
                        <li>{product[2].titulo}</li>
                        <li className="anterior"> {product[2].precoAnterior}</li>
                        <li>{product[2].precoAtual}</li>
                    </ul>

                    
                </Box>
                <Box>
                    <ul>
                        <li><img src= {`${product[5].img}`} alt="produto6"/></li>
                        <li>{product[5].titulo}</li>
                        <li className="anterior"> {product[5].precoAnterior}</li>
                        <li>{product[5].precoAtual}</li>
                    </ul>
                </Box>
            </div>
        </ProductGrid>
            <Footer>
            <p>Desenvolvido por Thállen Kettllen (github: thallenk)</p>
            </Footer>
        </Caixa>
    )
}