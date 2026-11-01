'use client';
import {useRef} from 'react';
import {ChevronLeft,ChevronRight} from 'lucide-react';
type Person={nome:string;resumo?:string;foto?:string};
export default function PeopleCarousel({items,label}:{items:Person[];label:string}){
 const track=useRef<HTMLDivElement>(null);
 const move=(dir:number)=>{const el=track.current;if(!el)return;const card=el.querySelector<HTMLElement>('.aboutPerson');el.scrollBy({left:dir*((card?.offsetWidth||320)+16),behavior:'smooth'});};
 return <div className="peopleCarousel"><div className="carouselControls"><span>Deslize para conhecer os integrantes</span><div><button type="button" aria-label={'Anterior: '+label} onClick={()=>move(-1)}><ChevronLeft size={22}/></button><button type="button" aria-label={'Próximo: '+label} onClick={()=>move(1)}><ChevronRight size={22}/></button></div></div><div className="aboutPeople" ref={track} role="region" aria-label={label} tabIndex={0}>{items.map(p=><article className="aboutPerson" key={p.nome}><div className="aboutPortrait">{p.foto?<img src={p.foto} alt={'Foto de '+p.nome} loading="lazy"/>:<span aria-hidden="true">{p.nome.split(' ').slice(0,2).map(x=>x[0]).join('')}</span>}</div><div className="aboutPersonText"><h3>{p.nome}</h3>{p.resumo&&<p>{p.resumo}</p>}</div></article>)}</div></div>;
}