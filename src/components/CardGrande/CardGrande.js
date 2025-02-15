
import React from 'react';
//import styled from 'styled-components'
import {ImgCardGrande, LayoutCardGrande, TituloCardGrande,InfosCard} from "./styles";


function CardGrande(props) {

return (
<LayoutCardGrande>
<ImgCardGrande src={ props.imagem }  />
<InfosCard>
<TituloCardGrande>{ props.nome }</TituloCardGrande>
<p>{ props.descricao }</p>
</InfosCard>
</LayoutCardGrande>
);
}
export default CardGrande 