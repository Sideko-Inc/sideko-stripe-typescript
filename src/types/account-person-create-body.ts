import {
  AccountPersonCreateBodyAdditionalTosAcceptances,
  External$AccountPersonCreateBodyAdditionalTosAcceptances,
  Schemas$AccountPersonCreateBodyAdditionalTosAcceptances,
} from "./account-person-create-body-additional-tos-acceptances";
import {
  AccountPersonCreateBodyAddress,
  External$AccountPersonCreateBodyAddress,
  Schemas$AccountPersonCreateBodyAddress,
} from "./account-person-create-body-address";
import {
  AccountPersonCreateBodyAddressKana,
  External$AccountPersonCreateBodyAddressKana,
  Schemas$AccountPersonCreateBodyAddressKana,
} from "./account-person-create-body-address-kana";
import {
  AccountPersonCreateBodyAddressKanji,
  External$AccountPersonCreateBodyAddressKanji,
  Schemas$AccountPersonCreateBodyAddressKanji,
} from "./account-person-create-body-address-kanji";
import {
  AccountPersonCreateBodyDobObj0,
  External$AccountPersonCreateBodyDobObj0,
  Schemas$AccountPersonCreateBodyDobObj0,
} from "./account-person-create-body-dob-obj0";
import {
  AccountPersonCreateBodyDocuments,
  External$AccountPersonCreateBodyDocuments,
  Schemas$AccountPersonCreateBodyDocuments,
} from "./account-person-create-body-documents";
import {
  AccountPersonCreateBodyMetadataObj0,
  External$AccountPersonCreateBodyMetadataObj0,
  Schemas$AccountPersonCreateBodyMetadataObj0,
} from "./account-person-create-body-metadata-obj0";
import {
  AccountPersonCreateBodyRegisteredAddress,
  External$AccountPersonCreateBodyRegisteredAddress,
  Schemas$AccountPersonCreateBodyRegisteredAddress,
} from "./account-person-create-body-registered-address";
import {
  AccountPersonCreateBodyRelationship,
  External$AccountPersonCreateBodyRelationship,
  Schemas$AccountPersonCreateBodyRelationship,
} from "./account-person-create-body-relationship";
import {
  AccountPersonCreateBodyVerification,
  External$AccountPersonCreateBodyVerification,
  Schemas$AccountPersonCreateBodyVerification,
} from "./account-person-create-body-verification";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPersonCreateBody
 */
export type AccountPersonCreateBody = {
  /**
   * Details on the legal guardian's or authorizer's acceptance of the required Stripe agreements.
   */
  additionalTosAcceptances?:
    | AccountPersonCreateBodyAdditionalTosAcceptances
    | undefined;
  /**
   * The person's address.
   */
  address?: AccountPersonCreateBodyAddress | undefined;
  /**
   * The Kana variation of the person's address (Japan only).
   */
  addressKana?: AccountPersonCreateBodyAddressKana | undefined;
  /**
   * The Kanji variation of the person's address (Japan only).
   */
  addressKanji?: AccountPersonCreateBodyAddressKanji | undefined;
  /**
   * The person's date of birth.
   */
  dob?: (AccountPersonCreateBodyDobObj0 | string) | undefined;
  /**
   * Documents that may be submitted to satisfy various informational requests.
   */
  documents?: AccountPersonCreateBodyDocuments | undefined;
  /**
   * The person's email address.
   */
  email?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The person's first name.
   */
  firstName?: string | undefined;
  /**
   * The Kana variation of the person's first name (Japan only).
   */
  firstNameKana?: string | undefined;
  /**
   * The Kanji variation of the person's first name (Japan only).
   */
  firstNameKanji?: string | undefined;
  /**
   * A list of alternate names or aliases that the person is known by.
   */
  fullNameAliases?: (string[] | string) | undefined;
  /**
   * The person's gender (International regulations require either "male" or "female").
   */
  gender?: string | undefined;
  /**
   * The person's ID number, as appropriate for their country. For example, a social security number in the U.S., social insurance number in Canada, etc. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://docs.stripe.com/js/tokens/create_token?type=pii).
   */
  idNumber?: string | undefined;
  /**
   * The person's secondary ID number, as appropriate for their country, will be used for enhanced verification checks. In Thailand, this would be the laser code found on the back of an ID card. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://docs.stripe.com/js/tokens/create_token?type=pii).
   */
  idNumberSecondary?: string | undefined;
  /**
   * The person's last name.
   */
  lastName?: string | undefined;
  /**
   * The Kana variation of the person's last name (Japan only).
   */
  lastNameKana?: string | undefined;
  /**
   * The Kanji variation of the person's last name (Japan only).
   */
  lastNameKanji?: string | undefined;
  /**
   * The person's maiden name.
   */
  maidenName?: string | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (AccountPersonCreateBodyMetadataObj0 | string) | undefined;
  /**
   * The country where the person is a national. Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)), or "XX" if unavailable.
   */
  nationality?: string | undefined;
  /**
   * A [person token](https://docs.stripe.com/connect/account-tokens), used to securely provide details to the person.
   */
  personToken?: string | undefined;
  /**
   * The person's phone number.
   */
  phone?: string | undefined;
  /**
   * Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
   */
  politicalExposure?: ("existing" | "none") | undefined;
  /**
   * The person's registered address.
   */
  registeredAddress?: AccountPersonCreateBodyRegisteredAddress | undefined;
  /**
   * The relationship that this person has with the account's legal entity.
   */
  relationship?: AccountPersonCreateBodyRelationship | undefined;
  /**
   * The last four digits of the person's Social Security number (U.S. only).
   */
  ssnLast4?: string | undefined;
  /**
   * The person's verification status.
   */
  verification?: AccountPersonCreateBodyVerification | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (AccountPersonCreateBodyAdditionalTosAcceptances | undefined)
    | (AccountPersonCreateBodyAddress | undefined)
    | (AccountPersonCreateBodyAddressKana | undefined)
    | (AccountPersonCreateBodyAddressKanji | undefined)
    | ((AccountPersonCreateBodyDobObj0 | string) | undefined)
    | (AccountPersonCreateBodyDocuments | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | ((string[] | string) | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | ((AccountPersonCreateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (("existing" | "none") | undefined)
    | (AccountPersonCreateBodyRegisteredAddress | undefined)
    | (AccountPersonCreateBodyRelationship | undefined)
    | (string | undefined)
    | (AccountPersonCreateBodyVerification | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * AccountPersonCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPersonCreateBody = {
  additional_tos_acceptances?:
    | External$AccountPersonCreateBodyAdditionalTosAcceptances
    | undefined;
  address?: External$AccountPersonCreateBodyAddress | undefined;
  address_kana?: External$AccountPersonCreateBodyAddressKana | undefined;
  address_kanji?: External$AccountPersonCreateBodyAddressKanji | undefined;
  dob?: (External$AccountPersonCreateBodyDobObj0 | string) | undefined;
  documents?: External$AccountPersonCreateBodyDocuments | undefined;
  email?: string | undefined;
  expand?: string[] | undefined;
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
    | (External$AccountPersonCreateBodyMetadataObj0 | string)
    | undefined;
  nationality?: string | undefined;
  person_token?: string | undefined;
  phone?: string | undefined;
  political_exposure?: ("existing" | "none") | undefined;
  registered_address?:
    | External$AccountPersonCreateBodyRegisteredAddress
    | undefined;
  relationship?: External$AccountPersonCreateBodyRelationship | undefined;
  ssn_last_4?: string | undefined;
  verification?: External$AccountPersonCreateBodyVerification | undefined;

  [additionalProperty: string]:
    | (External$AccountPersonCreateBodyAdditionalTosAcceptances | undefined)
    | (External$AccountPersonCreateBodyAddress | undefined)
    | (External$AccountPersonCreateBodyAddressKana | undefined)
    | (External$AccountPersonCreateBodyAddressKanji | undefined)
    | ((External$AccountPersonCreateBodyDobObj0 | string) | undefined)
    | (External$AccountPersonCreateBodyDocuments | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | ((string[] | string) | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | ((External$AccountPersonCreateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (("existing" | "none") | undefined)
    | (External$AccountPersonCreateBodyRegisteredAddress | undefined)
    | (External$AccountPersonCreateBodyRelationship | undefined)
    | (string | undefined)
    | (External$AccountPersonCreateBodyVerification | undefined)
    | External$AccountPersonCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPersonCreateBody
 */
const SchemaIn$AccountPersonCreateBody: z.ZodType<
  AccountPersonCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional_tos_acceptances:
      Schemas$AccountPersonCreateBodyAdditionalTosAcceptances.in.optional(),
    address: Schemas$AccountPersonCreateBodyAddress.in.optional(),
    address_kana: Schemas$AccountPersonCreateBodyAddressKana.in.optional(),
    address_kanji: Schemas$AccountPersonCreateBodyAddressKanji.in.optional(),
    dob: z
      .union([Schemas$AccountPersonCreateBodyDobObj0.in, z.string()])
      .optional(),
    documents: Schemas$AccountPersonCreateBodyDocuments.in.optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
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
      .union([Schemas$AccountPersonCreateBodyMetadataObj0.in, z.string()])
      .optional(),
    nationality: z.string().optional(),
    person_token: z.string().optional(),
    phone: z.string().optional(),
    political_exposure: z.enum(["existing", "none"]).optional(),
    registered_address:
      Schemas$AccountPersonCreateBodyRegisteredAddress.in.optional(),
    relationship: Schemas$AccountPersonCreateBodyRelationship.in.optional(),
    ssn_last_4: z.string().optional(),
    verification: Schemas$AccountPersonCreateBodyVerification.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      additional_tos_acceptances: "additionalTosAcceptances",
      address: "address",
      address_kana: "addressKana",
      address_kanji: "addressKanji",
      dob: "dob",
      documents: "documents",
      email: "email",
      expand: "expand",
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
      person_token: "personToken",
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPersonCreateBody
 */
const SchemaOut$AccountPersonCreateBody: z.ZodType<
  External$AccountPersonCreateBody, // output type of this zod object
  z.ZodTypeDef,
  AccountPersonCreateBody // the object to be transformed
> = z
  .object({
    additionalTosAcceptances:
      Schemas$AccountPersonCreateBodyAdditionalTosAcceptances.out.optional(),
    address: Schemas$AccountPersonCreateBodyAddress.out.optional(),
    addressKana: Schemas$AccountPersonCreateBodyAddressKana.out.optional(),
    addressKanji: Schemas$AccountPersonCreateBodyAddressKanji.out.optional(),
    dob: z
      .union([Schemas$AccountPersonCreateBodyDobObj0.out, z.string()])
      .optional(),
    documents: Schemas$AccountPersonCreateBodyDocuments.out.optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
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
      .union([Schemas$AccountPersonCreateBodyMetadataObj0.out, z.string()])
      .optional(),
    nationality: z.string().optional(),
    personToken: z.string().optional(),
    phone: z.string().optional(),
    politicalExposure: z.enum(["existing", "none"]).optional(),
    registeredAddress:
      Schemas$AccountPersonCreateBodyRegisteredAddress.out.optional(),
    relationship: Schemas$AccountPersonCreateBodyRelationship.out.optional(),
    ssnLast4: z.string().optional(),
    verification: Schemas$AccountPersonCreateBodyVerification.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      additionalTosAcceptances: "additional_tos_acceptances",
      address: "address",
      addressKana: "address_kana",
      addressKanji: "address_kanji",
      dob: "dob",
      documents: "documents",
      email: "email",
      expand: "expand",
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
      personToken: "person_token",
      phone: "phone",
      politicalExposure: "political_exposure",
      registeredAddress: "registered_address",
      relationship: "relationship",
      ssnLast4: "ssn_last_4",
      verification: "verification",
    });
  });

export const Schemas$AccountPersonCreateBody = {
  in: SchemaIn$AccountPersonCreateBody,
  out: SchemaOut$AccountPersonCreateBody,
};
