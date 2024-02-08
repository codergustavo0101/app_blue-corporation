import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { theme } from "../../../global/styles/theme";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import ArrowBottom from "../images/svg/ArrowBottom";

const InputFilterSearch = ({
  name,
  select,
  selectedValue,
  setSelectedValue,
  type,
  options,
  value,
  setValue,
}) => {
  let kilometersRange = Array.from({ length: 100 }, (_, i) => i + 1);
  let rankingRange = Array.from({ length: 5 }, (_, i) => i + 1);
  let servicesPerformed = Array.from({ length: 20 }, (_, i) => i + 1);
  let emergencyService = ["yes", "no"];

  return (
    <View style={styles.inputBox}>
      {options ? (
        <Picker
          selectedValue={null}
          style={{ width: "100%", transform: [{ translateY: -2 }] }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          {type == "typeServices" && (
            <Picker.Item label={`Selecione`} value={null} />
          )}
        </Picker>
      ) : (
        <>
          <Text style={styles.textTitleContent}>{name}:</Text>
          {select ? (
            <>
              <Picker
                selectedValue={selectedValue}
                style={{ width: "100%", transform: [{ translateY: -2 }] }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
              >
                {type == "userReach" &&
                  kilometersRange.map((value, _i) => {
                    return (
                      <Picker.Item
                        key={_i}
                        label={`${value} KM`}
                        value={value}
                      />
                    );
                  })}
                {type == "ranking" &&
                  rankingRange.map((value, _i) => {
                    return (
                      <Picker.Item
                        key={_i}
                        label={`${value} ${value > 1 ? "estrelas" : "estrela"}`}
                        value={value}
                      />
                    );
                  })}
                {type == "servicesPerformed" &&
                  servicesPerformed.map((value, _i) => {
                    return (
                      <Picker.Item key={_i} label={`${value}`} value={value} />
                    );
                  })}
                {type == "emergencyService" &&
                  emergencyService.map((value, _i) => {
                    return (
                      <Picker.Item
                        key={_i}
                        label={value == "yes" ? "Sim" : "Não"}
                        value={value}
                      />
                    );
                  })}
              </Picker>
              <View style={{ position: "absolute", right: 20 }}>
                <ArrowBottom />
              </View>
            </>
          ) : (
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={(text) => {
                setValue(text);
              }}
            />
          )}
        </>
      )}
    </View>
  );
};

const styles = ScaledSheet.create({
  inputBox: {
    width: "100%",
    height: "45@s",
    borderWidth: 1,
    borderColor: theme.colors.grey0,
    borderRadius: "9@s",
    alignItems: "center",
    paddingLeft: "16@s",
    paddingRight: "6@s",
    flexDirection: "row",
    gap: "3@s",
  },
  textTitleContent: {
    fontFamily: theme.fonts.fontPoppinsTitleBold,
    fontSize: "12@s",
  },
  input: {
    flex: 1,
    transform: [{ translateY: -2 }],
  },
});

export default InputFilterSearch;
