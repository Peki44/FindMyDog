import Image from "next/image";
import Heading from "../../atoms/Heading";
import Label from "../../atoms/Label";
import styles from "./UserForm.module.css";
import InfoLabel from "../../atoms/InfoLabel";
 
export interface UserFormProps {
  data?: any;
}
 
const UserForm = ({ data }: UserFormProps) => {
  return (
    <div className={styles.user_form}>
      {data && (
        <>
          {data.dogsName && (
            <Heading text={data.dogsName} size="_36" strong="bold"></Heading>
          )}
          {data.profileImageUri && (
            <div className={styles.image}>
              <Image
                src={data.profileImageUri}
                alt="dog"
                width={100}
                height={120}
                id="image"
              ></Image>
            </div>
          )}
          <div className={styles.forms}>
            {data.breed && (
              <Label
                text="Breed"
                strong="bold"
                color="white"
                size="_16"
              ></Label>
            )}
            {data.breed && <InfoLabel text={data.breed} id="breed" src="/paw.svg"></InfoLabel>}
            {/* <Information_input type="text" placeholder="" id="breed"></Information_input> */}
            {data.owner && (
              <Label
                text="Owner"
                strong="bold"
                color="white"
                size="_16"
              ></Label>
            )}
            {data.owner && <InfoLabel text={data.owner} id="owner" src="/boy.svg"></InfoLabel>}
            {data.phone && (
              <Label
                text="Phone"
                strong="bold"
                color="white"
                size="_16"
              ></Label>
            )}
            {data.phone && <InfoLabel text={data.phone} id="phone" src="/phoneCall.svg"></InfoLabel>}
            {data.email && (
              <Label
                text="Email"
                strong="bold"
                color="white"
                size="_16"
              ></Label>
            )}
            {data.email && <InfoLabel text={data.email} id="email" src="/mail.svg"></InfoLabel>}
            {data.address && (
              <Label
                text="Address"
                strong="bold"
                color="white"
                size="_16"
              ></Label>
            )}
            {data.address && (
              <InfoLabel text={data.address} id="address" src="/dogHouse.svg"></InfoLabel>
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default UserForm;