import React from "react";
import { ScrollView } from "react-native";
import { CATEGORIAS } from "../../constants";
import { CategoriaGame } from "../CategoriaGame";
import { styles } from "./styles";

type Props = {
    categorySelect: string;
    setCategoria: (categoriaId: string) => void;
};

export const CategorySelect: React.FC<Props> = ({ categorySelect, setCategoria }) => {
    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}>
            {CATEGORIAS.map(categoriaItem => <CategoriaGame
                onPress={() => setCategoria(categoriaItem.id)}
                key={categoriaItem.id}
                titulo={categoriaItem.titulo}
                icon={categoriaItem.icon}
                checked={categoriaItem.id === categorySelect} />)}
        </ScrollView>
    );
};