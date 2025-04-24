import {
  External$TokenCreateBodyAccountIndividualAddress,
  Schemas$TokenCreateBodyAccountIndividualAddress,
  TokenCreateBodyAccountIndividualAddress,
} from "./token-create-body-account-individual-address";
import {
  External$TokenCreateBodyAccountIndividualAddressKana,
  Schemas$TokenCreateBodyAccountIndividualAddressKana,
  TokenCreateBodyAccountIndividualAddressKana,
} from "./token-create-body-account-individual-address-kana";
import {
  External$TokenCreateBodyAccountIndividualAddressKanji,
  Schemas$TokenCreateBodyAccountIndividualAddressKanji,
  TokenCreateBodyAccountIndividualAddressKanji,
} from "./token-create-body-account-individual-address-kanji";
import {
  External$TokenCreateBodyAccountIndividualDobObj0,
  Schemas$TokenCreateBodyAccountIndividualDobObj0,
  TokenCreateBodyAccountIndividualDobObj0,
} from "./token-create-body-account-individual-dob-obj0";
import {
  External$TokenCreateBodyAccountIndividualMetadataObj0,
  Schemas$TokenCreateBodyAccountIndividualMetadataObj0,
  TokenCreateBodyAccountIndividualMetadataObj0,
} from "./token-create-body-account-individual-metadata-obj0";
import {
  External$TokenCreateBodyAccountIndividualRegisteredAddress,
  Schemas$TokenCreateBodyAccountIndividualRegisteredAddress,
  TokenCreateBodyAccountIndividualRegisteredAddress,
} from "./token-create-body-account-individual-registered-address";
import {
  External$TokenCreateBodyAccountIndividualRelationship,
  Schemas$TokenCreateBodyAccountIndividualRelationship,
  TokenCreateBodyAccountIndividualRelationship,
} from "./token-create-body-account-individual-relationship";
import {
  External$TokenCreateBodyAccountIndividualVerification,
  Schemas$TokenCreateBodyAccountIndividualVerification,
  TokenCreateBodyAccountIndividualVerification,
} from "./token-create-body-account-individual-verification";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBodyAccountIndividual
 */
export type TokenCreateBodyAccountIndividual = {
  address?: TokenCreateBodyAccountIndividualAddress | undefined;
  addressKana?: TokenCreateBodyAccountIndividualAddressKana | undefined;
  addressKanji?: TokenCreateBodyAccountIndividualAddressKanji | undefined;
  dob?: (TokenCreateBodyAccountIndividualDobObj0 | string) | undefined;
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
  metadata?:
    | (TokenCreateBodyAccountIndividualMetadataObj0 | string)
    | undefined;
  phone?: string | undefined;
  politicalExposure?: ("existing" | "none") | undefined;
  registeredAddress?:
    | TokenCreateBodyAccountIndividualRegisteredAddress
    | undefined;
  relationship?: TokenCreateBodyAccountIndividualRelationship | undefined;
  ssnLast4?: string | undefined;
  verification?: TokenCreateBodyAccountIndividualVerification | undefined;
};

/**
 * @internal
 * TokenCreateBodyAccountIndividual without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyAccountIndividual = {
  address?: External$TokenCreateBodyAccountIndividualAddress | undefined;
  address_kana?:
    | External$TokenCreateBodyAccountIndividualAddressKana
    | undefined;
  address_kanji?:
    | External$TokenCreateBodyAccountIndividualAddressKanji
    | undefined;
  dob?: (External$TokenCreateBodyAccountIndividualDobObj0 | string) | undefined;
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
    | (External$TokenCreateBodyAccountIndividualMetadataObj0 | string)
    | undefined;
  phone?: string | undefined;
  political_exposure?: ("existing" | "none") | undefined;
  registered_address?:
    | External$TokenCreateBodyAccountIndividualRegisteredAddress
    | undefined;
  relationship?:
    | External$TokenCreateBodyAccountIndividualRelationship
    | undefined;
  ssn_last_4?: string | undefined;
  verification?:
    | External$TokenCreateBodyAccountIndividualVerification
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyAccountIndividual
 */
const SchemaIn$TokenCreateBodyAccountIndividual: z.ZodType<
  TokenCreateBodyAccountIndividual, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$TokenCreateBodyAccountIndividualAddress.in.optional(),
    address_kana:
      Schemas$TokenCreateBodyAccountIndividualAddressKana.in.optional(),
    address_kanji:
      Schemas$TokenCreateBodyAccountIndividualAddressKanji.in.optional(),
    dob: z
      .union([Schemas$TokenCreateBodyAccountIndividualDobObj0.in, z.string()])
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
      .union([
        Schemas$TokenCreateBodyAccountIndividualMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    phone: z.string().optional(),
    political_exposure: z.enum(["existing", "none"]).optional(),
    registered_address:
      Schemas$TokenCreateBodyAccountIndividualRegisteredAddress.in.optional(),
    relationship:
      Schemas$TokenCreateBodyAccountIndividualRelationship.in.optional(),
    ssn_last_4: z.string().optional(),
    verification:
      Schemas$TokenCreateBodyAccountIndividualVerification.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyAccountIndividual
 */
const SchemaOut$TokenCreateBodyAccountIndividual: z.ZodType<
  External$TokenCreateBodyAccountIndividual, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyAccountIndividual // the object to be transformed
> = z
  .object({
    address: Schemas$TokenCreateBodyAccountIndividualAddress.out.optional(),
    addressKana:
      Schemas$TokenCreateBodyAccountIndividualAddressKana.out.optional(),
    addressKanji:
      Schemas$TokenCreateBodyAccountIndividualAddressKanji.out.optional(),
    dob: z
      .union([Schemas$TokenCreateBodyAccountIndividualDobObj0.out, z.string()])
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
      .union([
        Schemas$TokenCreateBodyAccountIndividualMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    phone: z.string().optional(),
    politicalExposure: z.enum(["existing", "none"]).optional(),
    registeredAddress:
      Schemas$TokenCreateBodyAccountIndividualRegisteredAddress.out.optional(),
    relationship:
      Schemas$TokenCreateBodyAccountIndividualRelationship.out.optional(),
    ssnLast4: z.string().optional(),
    verification:
      Schemas$TokenCreateBodyAccountIndividualVerification.out.optional(),
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

export const Schemas$TokenCreateBodyAccountIndividual = {
  in: SchemaIn$TokenCreateBodyAccountIndividual,
  out: SchemaOut$TokenCreateBodyAccountIndividual,
};
