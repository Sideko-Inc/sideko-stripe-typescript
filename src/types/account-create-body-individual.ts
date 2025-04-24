import {
  AccountCreateBodyIndividualAddress,
  External$AccountCreateBodyIndividualAddress,
  Schemas$AccountCreateBodyIndividualAddress,
} from "./account-create-body-individual-address";
import {
  AccountCreateBodyIndividualAddressKana,
  External$AccountCreateBodyIndividualAddressKana,
  Schemas$AccountCreateBodyIndividualAddressKana,
} from "./account-create-body-individual-address-kana";
import {
  AccountCreateBodyIndividualAddressKanji,
  External$AccountCreateBodyIndividualAddressKanji,
  Schemas$AccountCreateBodyIndividualAddressKanji,
} from "./account-create-body-individual-address-kanji";
import {
  AccountCreateBodyIndividualDobObj0,
  External$AccountCreateBodyIndividualDobObj0,
  Schemas$AccountCreateBodyIndividualDobObj0,
} from "./account-create-body-individual-dob-obj0";
import {
  AccountCreateBodyIndividualMetadataObj0,
  External$AccountCreateBodyIndividualMetadataObj0,
  Schemas$AccountCreateBodyIndividualMetadataObj0,
} from "./account-create-body-individual-metadata-obj0";
import {
  AccountCreateBodyIndividualRegisteredAddress,
  External$AccountCreateBodyIndividualRegisteredAddress,
  Schemas$AccountCreateBodyIndividualRegisteredAddress,
} from "./account-create-body-individual-registered-address";
import {
  AccountCreateBodyIndividualRelationship,
  External$AccountCreateBodyIndividualRelationship,
  Schemas$AccountCreateBodyIndividualRelationship,
} from "./account-create-body-individual-relationship";
import {
  AccountCreateBodyIndividualVerification,
  External$AccountCreateBodyIndividualVerification,
  Schemas$AccountCreateBodyIndividualVerification,
} from "./account-create-body-individual-verification";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Information about the person represented by the account. This field is null unless `business_type` is set to `individual`. Once you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
 */
export type AccountCreateBodyIndividual = {
  address?: AccountCreateBodyIndividualAddress | undefined;
  addressKana?: AccountCreateBodyIndividualAddressKana | undefined;
  addressKanji?: AccountCreateBodyIndividualAddressKanji | undefined;
  dob?: (AccountCreateBodyIndividualDobObj0 | string) | undefined;
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
  metadata?: (AccountCreateBodyIndividualMetadataObj0 | string) | undefined;
  phone?: string | undefined;
  politicalExposure?: ("existing" | "none") | undefined;
  registeredAddress?: AccountCreateBodyIndividualRegisteredAddress | undefined;
  relationship?: AccountCreateBodyIndividualRelationship | undefined;
  ssnLast4?: string | undefined;
  verification?: AccountCreateBodyIndividualVerification | undefined;
};

/**
 * @internal
 * AccountCreateBodyIndividual without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyIndividual = {
  address?: External$AccountCreateBodyIndividualAddress | undefined;
  address_kana?: External$AccountCreateBodyIndividualAddressKana | undefined;
  address_kanji?: External$AccountCreateBodyIndividualAddressKanji | undefined;
  dob?: (External$AccountCreateBodyIndividualDobObj0 | string) | undefined;
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
    | (External$AccountCreateBodyIndividualMetadataObj0 | string)
    | undefined;
  phone?: string | undefined;
  political_exposure?: ("existing" | "none") | undefined;
  registered_address?:
    | External$AccountCreateBodyIndividualRegisteredAddress
    | undefined;
  relationship?: External$AccountCreateBodyIndividualRelationship | undefined;
  ssn_last_4?: string | undefined;
  verification?: External$AccountCreateBodyIndividualVerification | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyIndividual
 */
const SchemaIn$AccountCreateBodyIndividual: z.ZodType<
  AccountCreateBodyIndividual, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$AccountCreateBodyIndividualAddress.in.optional(),
    address_kana: Schemas$AccountCreateBodyIndividualAddressKana.in.optional(),
    address_kanji:
      Schemas$AccountCreateBodyIndividualAddressKanji.in.optional(),
    dob: z
      .union([Schemas$AccountCreateBodyIndividualDobObj0.in, z.string()])
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
      .union([Schemas$AccountCreateBodyIndividualMetadataObj0.in, z.string()])
      .optional(),
    phone: z.string().optional(),
    political_exposure: z.enum(["existing", "none"]).optional(),
    registered_address:
      Schemas$AccountCreateBodyIndividualRegisteredAddress.in.optional(),
    relationship: Schemas$AccountCreateBodyIndividualRelationship.in.optional(),
    ssn_last_4: z.string().optional(),
    verification: Schemas$AccountCreateBodyIndividualVerification.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyIndividual
 */
const SchemaOut$AccountCreateBodyIndividual: z.ZodType<
  External$AccountCreateBodyIndividual, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyIndividual // the object to be transformed
> = z
  .object({
    address: Schemas$AccountCreateBodyIndividualAddress.out.optional(),
    addressKana: Schemas$AccountCreateBodyIndividualAddressKana.out.optional(),
    addressKanji:
      Schemas$AccountCreateBodyIndividualAddressKanji.out.optional(),
    dob: z
      .union([Schemas$AccountCreateBodyIndividualDobObj0.out, z.string()])
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
      .union([Schemas$AccountCreateBodyIndividualMetadataObj0.out, z.string()])
      .optional(),
    phone: z.string().optional(),
    politicalExposure: z.enum(["existing", "none"]).optional(),
    registeredAddress:
      Schemas$AccountCreateBodyIndividualRegisteredAddress.out.optional(),
    relationship:
      Schemas$AccountCreateBodyIndividualRelationship.out.optional(),
    ssnLast4: z.string().optional(),
    verification:
      Schemas$AccountCreateBodyIndividualVerification.out.optional(),
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

export const Schemas$AccountCreateBodyIndividual = {
  in: SchemaIn$AccountCreateBodyIndividual,
  out: SchemaOut$AccountCreateBodyIndividual,
};
