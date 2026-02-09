import { ShoppingBasket, Star, ChefHat, Music } from 'lucide-react';

export const products = [
    {
        title: "Conchas Tradicionales",
        desc: "El ícono de la panadería. Cobertura crujiente de vainilla o chocolate sobre un pan suave y esponjoso.",
        icon: <ShoppingBasket className="w-6 h-6 text-brand-brown" />,
        tag: "Más Vendido"
    },
    {
        title: "Champurradas",
        desc: "Tostaditas, con el toque justo de ajonjolí. Ideales para 'shukear' en tu café mañanero.",
        icon: <Star className="w-6 h-6 text-brand-gold" />
    },
    {
        title: "Pan Francés Auténtico",
        desc: "Crujiente por fuera, suave por dentro. El alma de cualquier desayuno guatemalteco.",
        icon: <ChefHat className="w-6 h-6 text-brand-brown" />
    },
    {
        title: "Pan de Manteca",
        desc: "Sabor nostálgico que se deshace en tu boca. Una receta que ha pasado por generaciones.",
        icon: <Music className="w-6 h-6 text-brand-gold" />
    },
    {
        title: "Pan Pirujo",
        desc: "Perfecto para sándwiches o para acompañar tus frijolitos volteados. Textura inigualable.",
        icon: <ChefHat className="w-6 h-6 text-brand-brown" />
    },
];
