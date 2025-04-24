import {
  External$TokenCreateBodyPersonAdditionalTosAcceptances,
  Schemas$TokenCreateBodyPersonAdditionalTosAcceptances,
  TokenCreateBodyPersonAdditionalTosAcceptances,
} from "./token-create-body-person-additional-tos-acceptances";
import {
  External$TokenCreateBodyPersonAddress,
  Schemas$TokenCreateBodyPersonAddress,
  TokenCreateBodyPersonAddress,
} from "./token-create-body-person-address";
import {
  External$TokenCreateBodyPersonAddressKana,
  Schemas$TokenCreateBodyPersonAddressKana,
  TokenCreateBodyPersonAddressKana,
} from "./token-create-body-person-address-kana";
import {
  External$TokenCreateBodyPersonAddressKanji,
  Schemas$TokenCreateBodyPersonAddressKanji,
  TokenCreateBodyPersonAddressKanji,
} from "./token-create-body-person-address-kanji";
import {
  External$TokenCreateBodyPersonDobObj0,
  Schemas$TokenCreateBodyPersonDobObj0,
  TokenCreateBodyPersonDobObj0,
} from "./token-create-body-person-dob-obj0";
import {
  External$TokenCreateBodyPersonDocuments,
  Schemas$TokenCreateBodyPersonDocuments,
  TokenCreateBodyPersonDocuments,
} from "./token-create-body-person-documents";
import {
  External$TokenCreateBodyPersonMetadataObj0,
  Schemas$TokenCreateBodyPersonMetadataObj0,
  TokenCreateBodyPersonMetadataObj0,
} from "./token-create-body-person-metadata-obj0";
import {
  External$TokenCreateBodyPersonRegisteredAddress,
  Schemas$TokenCreateBodyPersonRegisteredAddress,
  TokenCreateBodyPersonRegisteredAddress,
} from "./token-create-body-person-registered-address";
import {
  External$TokenCreateBodyPersonRelationship,
  Schemas$TokenCreateBodyPersonRelationship,
  TokenCreateBodyPersonRelationship,
} from "./token-create-body-person-relationship";
import {
  External$TokenCreateBodyPersonVerification,
  Schemas$TokenCreateBodyPersonVerification,
  TokenCreateBodyPersonVerification,
} from "./token-create-body-person-verification";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Information for the person this token represents.
 */
export type TokenCreateBodyPerson = {
  additionalTosAcceptances?:
    | TokenCreateBodyPersonAdditionalTosAcceptances
    | undefined;
  address?: TokenCreateBodyPersonAddress | undefined;
  addressKana?: TokenCreateBodyPersonAddressKana | undefined;
  addressKanji?: TokenCreateBodyPersonAddressKanji | undefined;
  dob?: (TokenCreateBodyPersonDobObj0 | string) | undefined;
  documents?: TokenCreateBodyPersonDocuments | undefined;
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
  metadata?: (TokenCreateBodyPersonMetadataObj0 | string) | undefined;
  nationality?: string | undefined;
  phone?: string | undefined;
  politicalExposure?: ("existing" | "none") | undefined;
  registeredAddress?: TokenCreateBodyPersonRegisteredAddress | undefined;
  relationship?: TokenCreateBodyPersonRelationship | undefined;
  ssnLast4?: string | undefined;
  verification?: TokenCreateBodyPersonVerification | undefined;
};

/**
 * @internal
 * TokenCreateBodyPerson without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyPerson = {
  additional_tos_acceptances?:
    | External$TokenCreateBodyPersonAdditionalTosAcceptances
    | undefined;
  address?: External$TokenCreateBodyPersonAddress | undefined;
  address_kana?: External$TokenCreateBodyPersonAddressKana | undefined;
  address_kanji?: External$TokenCreateBodyPersonAddressKanji | undefined;
  dob?: (External$TokenCreateBodyPersonDobObj0 | string) | undefined;
  documents?: External$TokenCreateBodyPersonDocuments | undefined;
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
  metadata?: (External$TokenCreateBodyPersonMetadataObj0 | string) | undefined;
  nationality?: string | undefined;
  phone?: string | undefined;
  political_exposure?: ("existing" | "none") | undefined;
  registered_address?:
    | External$TokenCreateBodyPersonRegisteredAddress
    | undefined;
  relationship?: External$TokenCreateBodyPersonRelationship | undefined;
  ssn_last_4?: string | undefined;
  verification?: External$TokenCreateBodyPersonVerification | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyPerson
 */
const SchemaIn$TokenCreateBodyPerson: z.ZodType<
  TokenCreateBodyPerson, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional_tos_acceptances:
      Schemas$TokenCreateBodyPersonAdditionalTosAcceptances.in.optional(),
    address: Schemas$TokenCreateBodyPersonAddress.in.optional(),
    address_kana: Schemas$TokenCreateBodyPersonAddressKana.in.optional(),
    address_kanji: Schemas$TokenCreateBodyPersonAddressKanji.in.optional(),
    dob: z
      .union([Schemas$TokenCreateBodyPersonDobObj0.in, z.string()])
      .optional(),
    documents: Schemas$TokenCreateBodyPersonDocuments.in.optional(),
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
      .union([Schemas$TokenCreateBodyPersonMetadataObj0.in, z.string()])
      .optional(),
    nationality: z.string().optional(),
    phone: z.string().optional(),
    political_exposure: z.enum(["existing", "none"]).optional(),
    registered_address:
      Schemas$TokenCreateBodyPersonRegisteredAddress.in.optional(),
    relationship: Schemas$TokenCreateBodyPersonRelationship.in.optional(),
    ssn_last_4: z.string().optional(),
    verification: Schemas$TokenCreateBodyPersonVerification.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additional_tos_acceptances: "additionalTosAcceptances",
      address: "address",
      address_kana: "addressKana",
      address_kanji: "addressKanji",
      dob: "dob",
      documents: "documents",
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
      nationality: "nationality",
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyPerson
 */
const SchemaOut$TokenCreateBodyPerson: z.ZodType<
  External$TokenCreateBodyPerson, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyPerson // the object to be transformed
> = z
  .object({
    additionalTosAcceptances:
      Schemas$TokenCreateBodyPersonAdditionalTosAcceptances.out.optional(),
    address: Schemas$TokenCreateBodyPersonAddress.out.optional(),
    addressKana: Schemas$TokenCreateBodyPersonAddressKana.out.optional(),
    addressKanji: Schemas$TokenCreateBodyPersonAddressKanji.out.optional(),
    dob: z
      .union([Schemas$TokenCreateBodyPersonDobObj0.out, z.string()])
      .optional(),
    documents: Schemas$TokenCreateBodyPersonDocuments.out.optional(),
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
      .union([Schemas$TokenCreateBodyPersonMetadataObj0.out, z.string()])
      .optional(),
    nationality: z.string().optional(),
    phone: z.string().optional(),
    politicalExposure: z.enum(["existing", "none"]).optional(),
    registeredAddress:
      Schemas$TokenCreateBodyPersonRegisteredAddress.out.optional(),
    relationship: Schemas$TokenCreateBodyPersonRelationship.out.optional(),
    ssnLast4: z.string().optional(),
    verification: Schemas$TokenCreateBodyPersonVerification.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additionalTosAcceptances: "additional_tos_acceptances",
      address: "address",
      addressKana: "address_kana",
      addressKanji: "address_kanji",
      dob: "dob",
      documents: "documents",
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
      nationality: "nationality",
      phone: "phone",
      politicalExposure: "political_exposure",
      registeredAddress: "registered_address",
      relationship: "relationship",
      ssnLast4: "ssn_last_4",
      verification: "verification",
    });
  });

export const Schemas$TokenCreateBodyPerson = {
  in: SchemaIn$TokenCreateBodyPerson,
  out: SchemaOut$TokenCreateBodyPerson,
};
