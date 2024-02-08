import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import * as ImagePicker from "expo-image-picker";
import ToastManager, { Toast } from "toastify-react-native";
import axios from "axios";
import storage from "../../firebase/storage";
import loadingIcon from './images/png/loading.gif'
import manIcon from './images/png/man.png'

import PageHeader from "./components/PageHeader";
import InputText from "./components/InputText";

import PhotoButton from "./images/svg/PhotoButton";
import StarIcon from "./images/svg/StarIcon";
import { Picker } from "@react-native-picker/picker";

import api from "../../services/api";
import { theme } from "../../global/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Modal, ActivityIndicator } from "react-native";

const Profile = ({ navigation, route }) => {

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [cpf, setCpf] = useState();
  const [email, setEmail] = useState();

  const [zipCode, setZipCode] = useState();
  const [street, setStreet] = useState();
  const [number, setNumber] = useState();
  const [complement, setComplement] = useState();
  const [neighborhood, setNeighborhood] = useState();
  const [city, setCity] = useState([]);

  const [isForeigner, setIsForeigner] = useState();
  const [isVerified, setIsVerified] = useState()
  const [frontRg, setFrontRg] = useState({});
  const [selfieWithDoc, setSelfieWithDoc] = useState({});
  const [proofOfAddress, setProofOfAddress] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState("");

  /* PREVIEW IMAGES */
  const [imagePreview, setPreviewImage] = useState()

  /* USER IMAGE */
  const [userImage, setUserImage] = useState()

  /* SELECT USER */
  const [selectState, setSelectState] = useState()
  const [selectedCity, setSelectedCity] = useState()

  const [selectCity, setSelectCity] = useState()
  const [brazilianStates, setBrazilianStates] = useState([]);

  /* DOCUMENTS STATES */
  const [cpfOrCnpjState, setCpfOrCnpjState] = useState(true)
  const [selfieDocumentState, setSelfieDocumentState] = useState(true)
  const [proofDocumentState, setProofDocumentState] = useState(true)

  /* MODAL LOADING */
  const [modalLoading, setModalLoading] = useState(false)

  /* IMAGES TO UPLOAD FIREBASE */
  const [imageCpfCnpj, setImageCpfCnpj] = useState()
  const [imageSelfie, setImageSelfie] = useState()
  const [imageProof, setImageProof] = useState()

  const [imageProfile, setImageProfile] = useState()

  const styles = ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    content: {
      flex: 1,
      backgroundColor: theme.colors.background,
      marginTop: "70@vs",
      padding: "25@vs",
    },
    userPhotoBlock: {
      width: "100%",

      diplay: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    userImageContainer: {
      width: "136@msr",
      height: "136@msr",
      borderRadius: "58@msr",

      backgroundColor: theme.colors.background,
      borderWidth: "2@msr",
      borderColor: theme.colors.border,

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      padding: "8@msr",
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    userImage: {
      width: "100%",
      height: "100%",
      borderRadius: "50@msr",
    },
    userPhotoButton: {
      width: "32@msr",
      height: "32@msr",
      position: "absolute",
      bottom: 0,
      bottom:7,
      right: 2,
    },
    userRatingContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",

      marginTop: "16@vs",
    },
    userRatingStars: {
      fontFamily: theme.fonts.fontPoppinsTitle,
      fontSize: "14@msr",
      lineHeight: "21@vs",

      paddingTop: "5@msr",
    },
    userRatingStarIcon: {
      marginHorizontal: "6@msr",
    },
    userRatingEvaluation: {
      fontFamily: theme.fonts.fontPoppinsContent,
      fontSize: "14@msr",
      lineHeight: "21@msr",

      paddingTop: "3@msr",
    },
    userInfoBlocks: {
      marginVertical: "40@vs",
    },
    userInfoBlock: {
      width: "100%",
      backgroundColor: theme.colors.background,
    },
    userInfoBlockTitle: {
      fontFamily: theme.fonts.fontPoppinsTitleBold,
      fontSize: "18@msr",
      lineHeight: "27@vs",
      marginVertical: "10@vs",
    },
    userInfo: {
      marginVertical: "10@vs",
    },
    userInfoTitle: {
      marginBottom: "14@vs",

      fontFamily: theme.fonts.fontPoppinsContent,
      fontSize: "14@msr",
      lineHeight: "18@vs",
    },
    userInfoVerified: {
      width: "150@s",
      height: "32@vs",
      borderRadius: "22@msr",
      backgroundColor: isVerified ? theme.colors.green0 : theme.colors.red0,

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      marginBottom: "10@vs",
    },
    userInfoVerifiedText: {
      fontFamily: theme.fonts.fontPoppinsContent,
      fontSize: "13@msr",
      lineHeight: "20@vs",
      color: isVerified ? theme.colors.green1 : theme.colors.red1,
    },
    termsText: {
      fontFamily: theme.fonts.fontPoppinsTitleBold,
      fontSize: "14@msr",
      color: theme.colors.colorPrimary,
      lineHeight: "20@vs",
    },
    selectType: {
      borderWidth: 1,
      color: "black",
      borderColor: theme.colors.grey0,
      width: "100%",
      borderRadius: 10,
    },
  });

  async function changePhoto() {
    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled) {
      setPreviewImage(result.assets[0].uri)

      const source = { uri: result.assets[0].uri }
      setImageProfile(source)
      AsyncStorage.removeItem("@USER_IMAGE")
      AsyncStorage.setItem("@USER_IMAGE", result.assets[0].uri)
    }
  }

  const getImage = async () => {
    const response = await AsyncStorage.getItem("@USER_IMAGE")    
    setUserImage(response)
  }

  navigation.addListener("focus", () => {
    getImage()
  }, [])

  const get = async () => {
    setName(user.name)
    setEmail(user.mail)
    setCpf(user.cpf)
    setPhone(user.phone)
    setUserImage(user.image)

    setZipCode(address.cep)
    setStreet(address.street)
    setNumber(address.number)

    setComplement(address.complement)
    setNeighborhood(address.district)
    setSelectState(address.state)
    setSelectedCity(address.city)

    if (documents.cnh_rg != null)
      setCpfOrCnpjState(false)

    if (documents.self_doc != null)
      setSelfieDocumentState(false)

    if (documents.proof_doc != null)
      setProofDocumentState(false)
  }

  const update = async () => {
    const mail = await AsyncStorage.getItem("@MAIL")

    try {
      const user = await api.put("client/user", {
        name: name,
        cpf: cpf,
        phone: phone,
        mail: mail,
      })
    } catch (error) {
      console.warn(error)
    }
  }

  const updateAddresses = async () => {
    const mail = await AsyncStorage.getItem("@MAIL")
    try {
      const userAddresses = api.put("client/user/addresses", {
        cep: zipCode,
        street: street,
        number: number,
        complement: complement,
        mail: mail
      })
    } catch (error) {
      console.warn(error)
    }
  }

  const updateState = async (state) => {
    const mail = await AsyncStorage.getItem("@MAIL")

    const updateState = api.put("client/user/addresses", {
      state: state,
      mail: mail
    })
  }

  const updateCity = async (city) => {
    const mail = await AsyncStorage.getItem("@MAIL")

    const updateState = api.put("client/user/addresses", {
      city: city,
      mail: mail

    })
  }

  /* DOCUMENTS USER STATES */
  const getRgOrCnpj = async () => {
    if (cpfOrCnpjState == false)
      return false

    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {

      const source = { uri: result.assets[0].uri }

      setImageCpfCnpj(source)
    }
  }

  const getSelfieDocument = async () => {

    if (selfieDocumentState == false)
      return false

    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 2],
      quality: 1,
    });

    if (!result.canceled) {

      const source = { uri: result.assets[0].uri }
      setImageSelfie(source)
    }
  }

  const getProofDocument = async () => {
    if (proofDocumentState == false)
      return false

    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const source = { uri: result.assets[0].uri }
      setImageProof(source)
    }
  }

  const storageRgOrCnpj = async () => {
    setModalLoading(true)
    const mail = await AsyncStorage.getItem("@MAIL")

    const response = await fetch(imageCpfCnpj.uri)
    const blob = await response.blob()
    const fileName = imageCpfCnpj.uri.substring(imageCpfCnpj.uri.lastIndexOf("/") + 1)

    const ref = storage.storage().ref(`/documents/cpf-cnh/${fileName}`).put(blob)

    ref.then(() => {
      storage.storage().ref(`/documents/cpf-cnh/${fileName}`).getDownloadURL().then(async (uri) => {

        const clientDocuments = await api.put("client/user/documents", {
          cnh_rg: uri,
          mail: mail
        })
      })
    })

    try {
      await ref
    } catch (error) {
      console.log(error)
    }
    setModalLoading(false)
    setCpfOrCnpjState(false)
    setImageCpfCnpj(undefined)
  }

  const storageSelfieDoc = async () => {
    setModalLoading(true)
    const mail = await AsyncStorage.getItem("@MAIL")

    const response = await fetch(imageSelfie.uri)
    const blob = await response.blob()
    const fileName = imageSelfie.uri.substring(imageSelfie.uri.lastIndexOf("/") + 1)

    const ref = storage.storage().ref(`/documents/selfies/${fileName}`).put(blob)

    ref.then(() => {
      storage.storage().ref(`/documents/selfies/${fileName}`).getDownloadURL().then(async (uri) => {

        const clientDocuments = await api.put("client/user/documents", {
          self_doc: uri,
          mail: mail
        })
      })
    })

    try {
      await ref
    } catch (error) {
      console.log(error)
    }
    setModalLoading(false)
    setSelfieDocumentState(false)
    setImageSelfie(undefined)
  }

  const storageProofDocument = async () => {
    setModalLoading(true)
    const mail = await AsyncStorage.getItem("@MAIL")

    const response = await fetch(imageProof.uri)
    const blob = await response.blob()
    const fileName = imageProof.uri.substring(imageProof.uri.lastIndexOf("/") + 1)

    const ref = storage.storage().ref(`/documents/proof/${fileName}`).put(blob)

    ref.then(() => {

      storage.storage().ref(`/documents/proof/${fileName}`).getDownloadURL().then(async (uri) => {

        const clientDocuments = await api.put("client/user/documents", {
          proof_doc: uri,
          mail: mail
        })
      })
    })

    try {
      await ref
    } catch (error) {
      console.log(error)
    }
    setModalLoading(false)
    setProofDocumentState(false)
    setImageProof(undefined)
  }

  const storageImageProfile = async () => {
    setModalLoading(true)
    const mail = await AsyncStorage.getItem("@MAIL")

    const response = await fetch(imageProfile.uri)
    const blob = await response.blob()
    const fileName = imageProfile.uri.substring(imageProfile.uri.lastIndexOf("/") + 1)

    const ref = storage.storage().ref(`/users/images/${fileName}`).put(blob)

    ref.then(() => {
      storage.storage().ref(`/users/images/${fileName}`).getDownloadURL().then(async (uri) => {
        const clientDocuments = await api.put("client/user/", {
          image: uri,
          mail: mail
        })

        const response = await api.get("client/get/user")

        setUser(response.data.user)
      })
    })

    try {
      await ref
    } catch (error) {
      console.warn(error)
    }
    setModalLoading(false)
    setProofDocumentState(false)
    setImageProfile(undefined)
  }

  // useEffect(() => {
  //   get()
  // }, [])


  useEffect(() => {
    const getBrazilianStates = async () => {
      const response = await axios.get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      );
      setBrazilianStates(response.data);
    };

    getBrazilianStates();
  }, []);

  useEffect(() => {
    if (imageCpfCnpj != undefined)
      storageRgOrCnpj()
  }, [imageCpfCnpj])

  useEffect(() => {
    if (imageSelfie != undefined)
      storageSelfieDoc()
  }, [imageSelfie])

  useEffect(() => {
    if (imageProof != undefined)
      storageProofDocument()
  }, [imageProof])

  useEffect(() => {
    if (imageProfile != undefined)
      storageImageProfile()
  }, [imageProfile])



  return (
    <View style={styles.container}>

      <Modal transparent={true} visible={modalLoading} >

        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007bff" />
        </View>
      </Modal>

      <ToastManager />
      <PageHeader
        onBackPress={() => navigation.goBack("Home")}
        title={"Minha conta"}
      />
      <ScrollView style={styles.content}>
        <View style={styles.userPhotoBlock}>
          <TouchableOpacity style={{
            ...styles.userImageContainer,
            borderColor: "white"
          }}
          onPress={changePhoto}

          >
            {userImage ? (
              imagePreview != undefined
                ?
                <Image source={{ uri: imagePreview }} style={{ width: "100%", height: "100%", borderRadius: 100 }} />
                :
                <Image source={{uri:userImage}} style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 100
                }}
                />
            ) : (
              <Image source={manIcon} style={{
                width: "100%",
                height: "100%",
                borderRadius: 100
              }}
              />
            )}

            <TouchableOpacity
              onPress={changePhoto}
              style={styles.userPhotoButton}
            >
              <PhotoButton />
            </TouchableOpacity>
          </TouchableOpacity>
          {/* <View style={styles.userRatingContainer}>
            <Text style={styles.userRatingStars}>{avaliation.averageRating}</Text>
            <StarIcon style={styles.userRatingStarIcon} />
            <Text style={styles.userRatingEvaluation}>{avaliation.totalAvaliations} avaliações</Text>
          </View> */}
        </View>
        <View style={styles.userInfoBlocks}>
          <View style={styles.userInfoBlock}>
            <Text style={styles.userInfoBlockTitle}>Informações iniciais</Text>

            <View style={styles.userInfo}>
              <Text style={styles.userInfoTitle}>Nome completo *</Text>
              <InputText
                value={"Usuário Test"}
                setValue={setName}
                onBlur={() => update()}
                onChangeText={(text) => setName(text)}
              />
            </View>

            <View style={styles.userInfo}>
              <Text style={styles.userInfoTitle}>CPF</Text>
              <InputText
                value={"000.000.000-00"}
                setValue={setCpf}
                type="cpf"
                onBlur={() => update(cpf)}
                onChangeText={(text) => setCpf(text)}
              />
            </View>


            <View style={styles.userInfo}>
              <Text style={styles.userInfoTitle}>E-mail</Text>
              <InputText
                value={"usuariotest@gmail.com"}
                setValue={setEmail}
                validate={(value) => {
                  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                  return reg.test(value);
                }}
                onChangeText={(text) => setEmail(text)}
              />
            </View>

            <View style={styles.userInfo}>
              <Text style={styles.userInfoTitle}>Telefone</Text>
              <InputText
                value={"00 0000-0000"}
                type="cel-phone"
                onBlur={() => update()}
                onChangeText={(text) => setPhone(text)}
              />
            </View>

            <Text style={styles.userInfoBlockTitle}>Endereço</Text>

            <View style={styles.userInfo}>
              <Text style={styles.userInfoTitle}>CEP</Text>
              <InputText
                value={"00000"}
                type="zip-code"
                onBlur={() => updateAddresses()}
                onChangeText={(text) => {
                  setZipCode(text);
                }}
              />
            </View>

            <View style={styles.userInfo}>
              <Text style={styles.userInfoTitle}>Rua</Text>
              <InputText
                value={"Rua test"}
                onBlur={() => updateAddresses()}

                onChangeText={(text) => {
                  setStreet(text);
                  setAddress({ ...address, street: text });
                }}
              />
            </View>

            <View style={styles.userInfo}>
              <Text style={styles.userInfoTitle}>Número</Text>
              <InputText
                value={"39"}
                onBlur={() => updateAddresses()}

                type="only-numbers"
                onChangeText={(text) => {
                  setNumber(text);
                  setAddress({ ...address, number: text });
                }}
              />
            </View>

            <View style={styles.userInfo}>
              <Text style={styles.userInfoTitle}>Complemento</Text>
              <InputText
                value={"Casa"}
                onBlur={() => updateAddresses()}

                onChangeText={(text) => {
                  setComplement(text);
                  setAddress({ ...address, complement: text });
                }}

              />
            </View>

            <View style={styles.userInfo}>

              <Text style={styles.userInfoTitle}>Bairro</Text>
              <InputText
                onBlur={() => updateAddresses()}
                onChangeText={(text) => {
                  setNeighborhood(text);
                  setAddress({ ...address, neighborhood: text });
                }}

                value={"Bairro Test"}
              />
            </View>

            <View>
            </View>



          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
