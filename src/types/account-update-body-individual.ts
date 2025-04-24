import {
  AccountUpdateBodyIndividualAddress,
  External$AccountUpdateBodyIndividualAddress,
  Schemas$AccountUpdateBodyIndividualAddress,
} from "./account-update-body-individual-address";
import {
  AccountUpdateBodyIndividualAddressKana,
  External$AccountUpdateBodyIndividualAddressKana,
  Schemas$AccountUpdateBodyIndividualAddressKana,
} from "./account-update-body-individual-address-kana";
import {
  AccountUpdateBodyIndividualAddressKanji,
  External$AccountUpdateBodyIndividualAddressKanji,
  Schemas$AccountUpdateBodyIndividualAddressKanji,
} from "./account-update-body-individual-address-kanji";
import {
  AccountUpdateBodyIndividualDobObj0,
  External$AccountUpdateBodyIndividualDobObj0,
  Schemas$AccountUpdateBodyIndividualDobObj0,
} from "./account-update-body-individual-dob-obj0";
import {
  AccountUpdateBodyIndividualMetadataObj0,
  External$AccountUpdateBodyIndividualMetadataObj0,
  Schemas$AccountUpdateBodyIndividualMetadataObj0,
} from "./account-update-body-individual-metadata-obj0";
import {
  AccountUpdateBodyIndividualRegisteredAddress,
  External$AccountUpdateBodyIndividualRegisteredAddress,
  Schemas$AccountUpdateBodyIndividualRegisteredAddress,
} from "./account-update-body-individual-registered-address";
import {
  AccountUpdateBodyIndividualRelationship,
  External$AccountUpdateBodyIndividualRelationship,
  Schemas$AccountUpdateBodyIndividualRelationship,
} from "./account-update-body-individual-relationship";
import {
  AccountUpdateBodyIndividualVerification,
  External$AccountUpdateBodyIndividualVerification,
  Schemas$AccountUpdateBodyIndividualVerification,
} from "./account-update-body-individual-verification";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Information about the person represented by the account. This field is null unless `business_type` is set to `individual`. Once you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
 */
export type AccountUpdateBodyIndividual = {
  address?: AccountUpdateBodyIndividualAddress | undefined;
  addressKana?: AccountUpdateBodyIndividualAddressKana | undefined;
  addressKanji?: AccountUpdateBodyIndividualAddressKanji | undefined;
  dob?: (AccountUpdateBodyIndividualDobObj0 | string) | undefined;
  email?: string | undefined;
  firstName?: string | undefined;
  firstNameKana?: string | undefined;
  firstNameKanji?: string | undefined;
  fullNameAliases?: (string[] | string) | undefined;
  gender?: string | undefined;
  idNumber?: string | undefined;
  idNumberSecondary?: string | undefined;
  lastName?: string | undefined;
  lastNameKana?: string | undefined;
  lastNameKanji?: string | undefined;
  maidenName?: string | undefined;
  metadata?: (AccountUpdateBodyIndividualMetadataObj0 | string) | undefined;
  phone?: string | undefined;
  politicalExposure?: ("existing" | "none") | undefined;
  registeredAddress?: AccountUpdateBodyIndividualRegisteredAddress | undefined;
  relationship?: AccountUpdateBodyIndividualRelationship | undefined;
  ssnLast4?: string | undefined;
  verification?: AccountUpdateBodyIndividualVerification | undefined;
};

/**
 * @internal
 * AccountUpdateBodyIndividual without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyIndividual = {
  address?: External$AccountUpdateBodyIndividualAddress | undefined;
  address_kana?: External$AccountUpdateBodyIndividualAddressKana | undefined;
  address_kanji?: External$AccountUpdateBodyIndividualAddressKanji | undefined;
  dob?: (External$AccountUpdateBodyIndividualDobObj0 | string) | undefined;
  email?: string | undefined;
  first_name?: string | undefined;
  first_name_kana?: string | undefined;
  first_name_kanji?: string | undefined;
  full_name_aliases?: (string[] | string) | undefined;
  gender?: string | undefined;
  id_number?: string | undefined;
  id_number_secondary?: string | undefined;
  last_name?: string | undefined;
  last_name_kana?: string | undefined;
  last_name_kanji?: string | undefined;
  maiden_name?: string | undefined;
  metadata?:
    | (External$AccountUpdateBodyIndividualMetadataObj0 | string)
    | undefined;
  phone?: string | undefined;
  political_exposure?: ("existing" | "none") | undefined;
  registered_address?:
    | External$AccountUpdateBodyIndividualRegisteredAddress
    | undefined;
  relationship?: External$AccountUpdateBodyIndividualRelationship | undefined;
  ssn_last_4?: string | undefined;
  verification?: External$AccountUpdateBodyIndividualVerification | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyIndividual
 */
const SchemaIn$AccountUpdateBodyIndividual: z.ZodType<
  AccountUpdateBodyIndividual, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$AccountUpdateBodyIndividualAddress.in.optional(),
    address_kana: Schemas$AccountUpdateBodyIndividualAddressKana.in.optional(),
    address_kanji:
      Schemas$AccountUpdateBodyIndividualAddressKanji.in.optional(),
    dob: z
      .union([Schemas$AccountUpdateBodyIndividualDobObj0.in, z.string()])
      .optional(),
    email: z.string().optional(),
    first_name: z.string().optional(),
    first_name_kana: z.string().optional(),
    first_name_kanji: z.string().optional(),
    full_name_aliases: z.union([z.array(z.string()), z.string()]).optional(),
    gender: z.string().optional(),
    id_number: z.string().optional(),
    id_number_secondary: z.string().optional(),
    last_name: z.string().optional(),
    last_name_kana: z.string().optional(),
    last_name_kanji: z.string().optional(),
    maiden_name: z.string().optional(),
    metadata: z
      .union([Schemas$AccountUpdateBodyIndividualMetadataObj0.in, z.string()])
      .optional(),
    phone: z.string().optional(),
    political_exposure: z.enum(["existing", "none"]).optional(),
    registered_address:
      Schemas$AccountUpdateBodyIndividualRegisteredAddress.in.optional(),
    relationship: Schemas$AccountUpdateBodyIndividualRelationship.in.optional(),
    ssn_last_4: z.string().optional(),
    verification: Schemas$AccountUpdateBodyIndividualVerification.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      address_kana: "addressKana",
      address_kanji: "addressKanji",
      dob: "dob",
      email: "email",
      first_name: "firstName",
      first_name_kana: "firstNameKana",
      first_name_kanji: "firstNameKanji",
      full_name_aliases: "fullNameAliases",
      gender: "gender",
      id_number: "idNumber",
      id_number_secondary: "idNumberSecondary",
      last_name: "lastName",
      last_name_kana: "lastNameKana",
      last_name_kanji: "lastNameKanji",
      maiden_name: "maidenName",
      metadata: "metadata",
      phone: "phone",
      political_exposure: "politicalExposure",
      registered_address: "registeredAddress",
      relationship: "relationship",
      ssn_last_4: "ssnLast4",
      verification: "verification",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyIndividual
 */
const SchemaOut$AccountUpdateBodyIndividual: z.ZodType<
  External$AccountUpdateBodyIndividual, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyIndividual // the object to be transformed
> = z
  .object({
    address: Schemas$AccountUpdateBodyIndividualAddress.out.optional(),
    addressKana: Schemas$AccountUpdateBodyIndividualAddressKana.out.optional(),
    addressKanji:
      Schemas$AccountUpdateBodyIndividualAddressKanji.out.optional(),
    dob: z
      .union([Schemas$AccountUpdateBodyIndividualDobObj0.out, z.string()])
      .optional(),
    email: z.string().optional(),
    firstName: z.string().optional(),
    firstNameKana: z.string().optional(),
    firstNameKanji: z.string().optional(),
    fullNameAliases: z.union([z.array(z.string()), z.string()]).optional(),
    gender: z.string().optional(),
    idNumber: z.string().optional(),
    idNumberSecondary: z.string().optional(),
    lastName: z.string().optional(),
    lastNameKana: z.string().optional(),
    lastNameKanji: z.string().optional(),
    maidenName: z.string().optional(),
    metadata: z
      .union([Schemas$AccountUpdateBodyIndividualMetadataObj0.out, z.string()])
      .optional(),
    phone: z.string().optional(),
    politicalExposure: z.enum(["existing", "none"]).optional(),
    registeredAddress:
      Schemas$AccountUpdateBodyIndividualRegisteredAddress.out.optional(),
    relationship:
      Schemas$AccountUpdateBodyIndividualRelationship.out.optional(),
    ssnLast4: z.string().optional(),
    verification:
      Schemas$AccountUpdateBodyIndividualVerification.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      addressKana: "address_kana",
      addressKanji: "address_kanji",
      dob: "dob",
      email: "email",
      firstName: "first_name",
      firstNameKana: "first_name_kana",
      firstNameKanji: "first_name_kanji",
      fullNameAliases: "full_name_aliases",
      gender: "gender",
      idNumber: "id_number",
      idNumberSecondary: "id_number_secondary",
      lastName: "last_name",
      lastNameKana: "last_name_kana",
      lastNameKanji: "last_name_kanji",
      maidenName: "maiden_name",
      metadata: "metadata",
      phone: "phone",
      politicalExposure: "political_exposure",
      registeredAddress: "registered_address",
      relationship: "relationship",
      ssnLast4: "ssn_last_4",
      verification: "verification",
    });
  });

export const Schemas$AccountUpdateBodyIndividual = {
  in: SchemaIn$AccountUpdateBodyIndividual,
  out: SchemaOut$AccountUpdateBodyIndividual,
};
