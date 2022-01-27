import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { addNewCenter } from "../../services";

const AddCenterScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [name, onChangeName] = useState("");
  const [address, onAddressChange] = useState("");
  const [time, onTimeChange] = useState("");
  const [kindService, onKindServiceChange] = useState("");
  const [phone, onPhoneChange] = useState("");
  const [email, onEmailChange] = useState("");
  const [website, onWebsiteChange] = useState("");
  const handleForm = async () => {
    try {
      const sampleData={
        "address":  {
            "LGA": "",
            "Region": " ",
            "houseNumber": address,
          },
          "children": 89,
          "childrens": 50,
          "contact":  {
            "email": email,
            "phone": phone,
            "website":website,
          },
          "date":time,
          "description": "At Only About Children South Melbourne, we believe that our holistic approach to childcare and kindergarten gives every child the best opportunity to reach their full potential. Our quality early learning programs are innovative, with a focus on health, wellbeing and education. \\nOur unique Campus is located 221 Ferrars Street, South Melbourne, in a heritage listed train station which was built in 1883. Our two buildings are named Westside and Eastside because they are separated by a tram line, which runs between them. We are close to several local schools \\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",        
          "emailAdmin": "sthmelbourne@oac.edu.au",
          "features":  [
            "0gVoEgeRBwSjxlzegqy7",
            "3jVcPIXub3RNPeSvWnCb",
            "7bD4Vu5KdCaeJMMy3suI",
            "81lt3RP9mje8iBOM1Pdb",
          ],
          "hours":  {
            "holidays":  {
              "Mon_Fri":  {
                "afternoon":  {
                  "end": "15:30",
                  "start": "13:00",
                },
                "morning":  {
                  "end": "12:00",
                  "start": "8:00",
                },
                "title": "Mon - Fri",
              },
              "Sat":  {
                "afternoon":  {
                  "end": "17:00",
                  "start": "13:30",
                },
                "morning":  {
                  "end": "11:00",
                  "start": "8:00",
                },
                "title": "Sat",
              },
              "Sun":  {
                "afternoon":  {
                  "end": "17:00",
                  "start": "14:00",
                },
                "morning":  {
                  "end": "10:00",
                  "start": "8:30",
                },
                "title": "Sun",
              },
            },
            "normal":  {
              "Mon_Fri":  {
                "afternoon":  {
                  "end": "17:00",
                  "start": "13:00",
                },
                "morning":  {
                  "end": "12:00",
                  "start": "8:00",
                },
                "title": "Mon - Fri",
              },
              "Sat":  {
                "afternoon":  {
                  "end": "17:30",
                  "start": "14:10",
                },
                "morning":  {
                  "end": "11:45",
                  "start": "9:15",
                },
                "title": "Sat",
              },
              "Sun":  {
                "afternoon":  {
                  "end": "15:45",
                  "start": "14:30",
                },
                "morning":  {
                  "end": "11:20",
                  "start": "8:45",
                },
                "title": "Sun",
              },
            },
            "term":  {
              "Mon_Fri":  {
                "afternoon":  {
                  "end": "17:00",
                  "start": "13:00",
                },
                "morning":  {
                  "end": "12:00",
                  "start": "8:00",
                },
                "title": "Mon - Fri",
              },
              "Sat":  {
                "afternoon":  {
                  "end": "16:10",
                  "start": "14:00",
                },
                "morning":  {
                  "end": "10:00",
                  "start": "8:20",
                },
                "title": "Sat",
              },
              "Sun":  {
                "afternoon":  {
                  "end": "18:15",
                  "start": "13:50",
                },
                "morning":  {
                  "end": "11:50",
                  "start": "7:45",
                },
                "title": "Sun",
              },
            },
          },
          "kindService": kindService,
          "marketing":  [
            "M3qk9Ppyo4wfwybRQJkg",
          ],
          "name": "Goodstart Early Learning ABC",
          "outdoor": "Centre-based Care",
          "reviews":  {
            "average_rate": 8.6,
            "description": "The KindiCare Rating for this service of 8.4 is lower than the average KindiCare Rating for the area of 8.6, and represents the good quality of service provided",
            "nqs_rating":  [
               {
                "link": "Exceeding NQS",
                "name": "Education program and practice",
              },
               {
                "link": "Exceeding NQS",
                "name": "Children’s health and safety",
              },
               {
                "link": "Exceeding NQS",
                "name": "Physical environment",
              },
               {
                "link": "Exceeding NQS",
                "name": "Staffing arrangement",
              },
               {
                "link": "Exceeding NQS",
                "name": "Relationships with children",
              },
               {
                "link": "Exceeding NQS",
                "name": "Collaborative partnerships with families and communities",
              },
            ],
            "rate": 8.4,
            "user_reviews":  [
               {
                "created_at": "Jun 29, 2020",
                "description": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
                "images":  [
                  "https://afamilycdn.com/2019/7/7/capture-1562459163456860716620.png",
                  "https://abacusmaster.edu.vn/wp-content/uploads/2018/10/toan-tu-duy-1-27.jpg",
                  "https://file1.dangcongsan.vn/data/0/images/2021/09/30/ctvbandoc/bi-quyet-day-hoc-online-hieu-qua-lop-hoc-khong-thanh-cai-cho.jpg?dpi=150&quality=100&w=780",
                  "http://mghoacuc.tptdm.edu.vn/uploads/mghoacuc/news/2017_04/img_3458.jpg",
                  "https://file1.dangcongsan.vn/data/0/images/2021/08/26/vuongle/239992528-4544404625626587-4547146778054167604-n.jpg?dpi=150&quality=100&w=780",
                ],
                "rating": "4",
                "star": "4",
                "user_avatar": "https://reactjs.org/logo-og.png",
                "user_id": "a",
                "user_name": "Hoang Trung Quan",
                "user_type": "Google Review",
              },
               {
                "created_at": "Jun 29, 2020",
                "description": "some one like you",
                "images":  [
                  "https://vcdn-vnexpress.vnecdn.net/2021/08/30/hoc-online-5791-1630256727.jpg",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0rkyiU2CX_a2a-luYmHBhdZEtYnrcaawITapxXyMFfhCIOa7fBxc8guUmooPKFW50qUA&usqp=CAU",
                ],
                "rating": "4",
                "star": 5,
                "type": "Kindi's User Review",
                "user_avatar": "https://reactjs.org/logo-og.png",
                "user_id": "",
                "user_name": "Hoang Trung Quan",
              },
            ],
          },
          "services":  [
             {
              "description": "full day",
              "icon": "https://i.ibb.co/RHvbgJR/icon4.png",
              "price": 112,
              "time": "0 to 12 months",
              "title": "Long Day Care",
            },
             {
              "description": "full day",
              "icon": "https://i.ibb.co/ssp4GPP/icon3.png",
              "price": 112,
              "time": "0 to 12 months",
              "title": "Pre-School/ Kindergarten",
            },
             {
              "description": "full day",
              "icon": "https://i.ibb.co/nmZX5zP/icon2.png",
              "price": 112,
              "time": "0 to 12 months",
              "title": "Before & After School Care",
            },
             {
              "description": "full day",
              "icon": "https://i.ibb.co/k85FjrG/icon1.png",
              "price": 112,
              "time": "0 to 12 months",
              "title": "Family Day Care",
            },
             {
              "description": "full day",
              "icon": "https://i.ibb.co/3kX4vCy/icon.png",
              "price": 112,
              "time": "0 to 12 months",
              "title": "Vacation Care",
            },
          ],
          "waitlisted": "48",
      }
        const center = await addNewCenter(sampleData);
      if (center) {
          setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.layout}>
        <View style={styles.header}>
            <Ionicons
            onPress={() => {
                navigation.goBack();
            }}
            style={styles.headerBack}
            name="arrow-back-sharp"
            size={20}
            color="#857E7F"
            />        
            <Text style={styles.title}> Add New Center</Text>

        </View>
        <TextInput
        placeholder="Center name"
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        />
        <TextInput
        placeholder="Address"
        style={styles.input}
        onChangeText={onAddressChange}
        value={address}
        />
        <TextInput
        placeholder="Time"
        style={styles.input}
        onChangeText={onTimeChange}
        value={time}
        />
        <TextInput
        placeholder="Kind of services"
        style={styles.input}
        onChangeText={onKindServiceChange}
        value={kindService}
        />
        <TextInput
        placeholder="Phone number"
        style={styles.input}
        onChangeText={onPhoneChange}
        value={phone}
        />
        <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={onEmailChange}
        value={email}
        />
        <TextInput
        placeholder="Website"
        style={styles.input}
        onChangeText={onWebsiteChange}
        value={website}
        />
        <TouchableOpacity
        disabled={loading}
        activeOpacity={0.8}
        style={styles.button}
        onPress={handleForm}
        >
        {loading ? (
          <Text style={{ color: "white" }}>{"...Loading"}</Text>
        ) : (
          <Text style={styles.buttonText}>Add New</Text>
        )}
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    justifyContent: "flex-end",
      },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 8,
    alignSelf: "center",
    textAlign: "center",

  },
  input: {
    height: 60,
    borderWidth: 1,
    margin: 12,
    padding: 12,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#f2f2f2",
  },
  layout: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  button: {
    backgroundColor: "#DB147F",
    width: "80%",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    lineHeight: 24,
  },
  headerBack: {
    position: "absolute",
    left: 20,
    bottom: 12,
    zIndex: 10,
  },
});

export default AddCenterScreen;
