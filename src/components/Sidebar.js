import { useState } from "react";
import { View, Text, TouchableOpacity,Image} from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { ScaledSheet } from "react-native-size-matters";
import { BackHandler } from "react-native";
import Logo from "../images/svg/Logo";
import companyIcon from '../images/png/companyIcon.jpg'
import HomeIcon from "../images/svg/HomeIcon";
import SchedulesIcon from "../images/svg/SchedulesIcon";
import ChatIcon from "../images/svg/ChatIcon";
import FavoritesIcon from "../images/svg/FavoritesIcon";
import UserIcon from "../images/svg/UserIcon";
import ExitIcon from "../images/svg/ExitIcon";

import { theme } from "../global/theme";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Sidebar = (props) => {
    const [currentPage, setCurrentPage] = useState(0);
    const navigation = useNavigation();

    function navigate(i, name) {
        i !== null && setCurrentPage(i);
        props.navigation.navigate(name);
    }

    const closeApp = () => {
        AsyncStorage.removeItem("@MAIL")
        AsyncStorage.removeItem("@TOKEN")
        AsyncStorage.removeItem("@USERID")
        AsyncStorage.clear()
          // Adiciona um listener para o evento de hardware 'back'
          BackHandler.addEventListener('hardwareBackPress', handleBackPress);
      
          // Fecha o aplicativo após 2 segundos
          setTimeout(() => {
            BackHandler.exitApp();
          }, 1000);
      
        const handleBackPress = () => {
          // Impede o comportamento padrão do botão de voltar
          return true;
        };
    }


    return (
        <DrawerContentScrollView
            scrollEnabled={false}
            {...props}
            style={styles.container}
        >
            <View style={styles.boxSidebar}>
                <View style={styles.topSidebar}>
                    <Image source={companyIcon} style={{width:"100%",height:120}} />
                </View>
                <View style={styles.boxContent}>
                    <TouchableOpacity
                        style={
                            currentPage === 0
                                ? styles.pageButtonActive
                                : styles.pageButtonDisabled
                        }
                        onPress={() => navigate(0, "Dashboard")}
                    >
                        <HomeIcon color={currentPage === 0 ? "#fff" : "#787486"} />
                        <Text
                            style={
                                currentPage === 0
                                    ? styles.pageTextActive
                                    : styles.pageTextDisabled
                            }
                        >
                            Home
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={
                            currentPage === 4
                                ? styles.pageButtonActive
                                : styles.pageButtonDisabled
                        }
                        onPress={() => navigate(4, "Profile")}
                    >
                        <UserIcon color={currentPage === 4 ? "#fff" : "#787486"} />
                        <Text
                            style={
                                currentPage === 4
                                    ? styles.pageTextActive
                                    : styles.pageTextDisabled
                            }
                        >
                            Minha conta
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.pageButtonExit}
                        onPress={() => closeApp()}

                    >
                        <ExitIcon />
                        <Text
                            children={"Sair"}
                            style={styles.pageTextDisabled} />
                    </TouchableOpacity>
                </View>
            </View>
        </DrawerContentScrollView>
    );
};

const styles = ScaledSheet.create({
    container: {
        width: 266,
        height: "100%",
    },
    boxSidebar: {
        borderBottomEndRadius: 17,
        borderTopEndRadius: 17,
        padding: "16@s",
        paddingTop: "51@s",
    },
    closeBack: {
        height: "710@s",
        width: "100@s",
    },
    topSidebar: {
        paddingLeft: "16@s",
    },
    boxContent: {
        marginTop: "43@s",
        gap: "29@s",
    },
    pageButtonActive: {
        backgroundColor: theme.colors.colorPrimary,
        padding: "8@s",
        paddingLeft: "11@s",
        paddingRight: "11@s",
        gap: "14@s",

        borderRadius: "8@s",
        flexDirection: "row",
    },
    pageButtonDisabled: {
        padding: "8@s",
        paddingLeft: "11@s",
        paddingRight: "11@s",
        borderRadius: "8@s",
        flexDirection: "row",
    },
    pageTextActive: {
        color: theme.colors.white,
        fontFamily: theme.fonts.fontPoppinsTitleBold,
        marginLeft: "14@s",
    },
    pageTextDisabled: {
        color: theme.colors.grey6,
        fontFamily: theme.fonts.fontPoppinsTitleBold,
        marginLeft: "14@s",
    },
    pageButtonExit: {
        backgroundColor: theme.colors.white,
        padding: "8@s",
        paddingLeft: "11@s",
        paddingRight: "11@s",
        flexDirection: "row",
        gap: "14@s",
        borderRadius: "8@s",
        alignItems: "center",
        marginTop: "100@s",
    },
});

export default Sidebar;