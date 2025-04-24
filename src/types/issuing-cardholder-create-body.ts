import {
  External$IssuingCardholderCreateBodyBilling,
  IssuingCardholderCreateBodyBilling,
  Schemas$IssuingCardholderCreateBodyBilling,
} from "./issuing-cardholder-create-body-billing";
import {
  External$IssuingCardholderCreateBodyCompany,
  IssuingCardholderCreateBodyCompany,
  Schemas$IssuingCardholderCreateBodyCompany,
} from "./issuing-cardholder-create-body-company";
import {
  External$IssuingCardholderCreateBodyIndividual,
  IssuingCardholderCreateBodyIndividual,
  Schemas$IssuingCardholderCreateBodyIndividual,
} from "./issuing-cardholder-create-body-individual";
import {
  External$IssuingCardholderCreateBodyMetadata,
  IssuingCardholderCreateBodyMetadata,
  Schemas$IssuingCardholderCreateBodyMetadata,
} from "./issuing-cardholder-create-body-metadata";
import {
  External$IssuingCardholderCreateBodySpendingControls,
  IssuingCardholderCreateBodySpendingControls,
  Schemas$IssuingCardholderCreateBodySpendingControls,
} from "./issuing-cardholder-create-body-spending-controls";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingCardholderCreateBody
 */
export type IssuingCardholderCreateBody = {
  /**
   * The cardholder's billing address.
   */
  billing: IssuingCardholderCreateBodyBilling;
  /**
   * Additional information about a `company` cardholder.
   */
  company?: IssuingCardholderCreateBodyCompany | undefined;
  /**
   * The cardholder's email address.
   */
  email?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Additional information about an `individual` cardholder.
   */
  individual?: IssuingCardholderCreateBodyIndividual | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: IssuingCardholderCreateBodyMetadata | undefined;
  /**
   * The cardholder's name. This will be printed on cards issued to them. The maximum length of this field is 24 characters. This field cannot contain any special characters or numbers.
   */
  name: string;
  /**
   * The cardholder's phone number. This will be transformed to [E.164](https://en.wikipedia.org/wiki/E.164) if it is not provided in that format already. This is required for all cardholders who will be creating EU cards. See the [3D Secure documentation](https://stripe.com/docs/issuing/3d-secure#when-is-3d-secure-applied) for more details.
   */
  phoneNumber?: string | undefined;
  /**
   * The cardholder’s preferred locales (languages), ordered by preference. Locales can be `de`, `en`, `es`, `fr`, or `it`.
   *  This changes the language of the [3D Secure flow](https://stripe.com/docs/issuing/3d-secure) and one-time password messages sent to the cardholder.
   */
  preferredLocales?: ("de" | "en" | "es" | "fr" | "it")[] | undefined;
  /**
   * Rules that control spending across this cardholder's cards. Refer to our [documentation](https://stripe.com/docs/issuing/controls/spending-controls) for more details.
   */
  spendingControls?: IssuingCardholderCreateBodySpendingControls | undefined;
  /**
   * Specifies whether to permit authorizations on this cardholder's cards. Defaults to `active`.
   */
  status?: ("active" | "inactive") | undefined;
  /**
   * One of `individual` or `company`. See [Choose a cardholder type](https://stripe.com/docs/issuing/other/choose-cardholder) for more details.
   */
  type?: ("company" | "individual") | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | IssuingCardholderCreateBodyBilling
    | (IssuingCardholderCreateBodyCompany | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (IssuingCardholderCreateBodyIndividual | undefined)
    | (IssuingCardholderCreateBodyMetadata | undefined)
    | string
    | (string | undefined)
    | (("de" | "en" | "es" | "fr" | "it")[] | undefined)
    | (IssuingCardholderCreateBodySpendingControls | undefined)
    | (("active" | "inactive") | undefined)
    | (("company" | "individual") | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * IssuingCardholderCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderCreateBody = {
  billing: External$IssuingCardholderCreateBodyBilling;
  company?: External$IssuingCardholderCreateBodyCompany | undefined;
  email?: string | undefined;
  expand?: string[] | undefined;
  individual?: External$IssuingCardholderCreateBodyIndividual | undefined;
  metadata?: External$IssuingCardholderCreateBodyMetadata | undefined;
  name: string;
  phone_number?: string | undefined;
  preferred_locales?: ("de" | "en" | "es" | "fr" | "it")[] | undefined;
  spending_controls?:
    | External$IssuingCardholderCreateBodySpendingControls
    | undefined;
  status?: ("active" | "inactive") | undefined;
  type?: ("company" | "individual") | undefined;

  [additionalProperty: string]:
    | External$IssuingCardholderCreateBodyBilling
    | (External$IssuingCardholderCreateBodyCompany | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (External$IssuingCardholderCreateBodyIndividual | undefined)
    | (External$IssuingCardholderCreateBodyMetadata | undefined)
    | string
    | (string | undefined)
    | (("de" | "en" | "es" | "fr" | "it")[] | undefined)
    | (External$IssuingCardholderCreateBodySpendingControls | undefined)
    | (("active" | "inactive") | undefined)
    | (("company" | "individual") | undefined)
    | External$IssuingCardholderCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderCreateBody
 */
const SchemaIn$IssuingCardholderCreateBody: z.ZodType<
  IssuingCardholderCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    billing: Schemas$IssuingCardholderCreateBodyBilling.in,
    company: Schemas$IssuingCardholderCreateBodyCompany.in.optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    individual: Schemas$IssuingCardholderCreateBodyIndividual.in.optional(),
    metadata: Schemas$IssuingCardholderCreateBodyMetadata.in.optional(),
    name: z.string(),
    phone_number: z.string().optional(),
    preferred_locales: z
      .array(z.enum(["de", "en", "es", "fr", "it"]))
      .optional(),
    spending_controls:
      Schemas$IssuingCardholderCreateBodySpendingControls.in.optional(),
    status: z.enum(["active", "inactive"]).optional(),
    type: z.enum(["company", "individual"]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      billing: "billing",
      company: "company",
      email: "email",
      expand: "expand",
      individual: "individual",
      metadata: "metadata",
      name: "name",
      phone_number: "phoneNumber",
      preferred_locales: "preferredLocales",
      spending_controls: "spendingControls",
      status: "status",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderCreateBody
 */
const SchemaOut$IssuingCardholderCreateBody: z.ZodType<
  External$IssuingCardholderCreateBody, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderCreateBody // the object to be transformed
> = z
  .object({
    billing: Schemas$IssuingCardholderCreateBodyBilling.out,
    company: Schemas$IssuingCardholderCreateBodyCompany.out.optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    individual: Schemas$IssuingCardholderCreateBodyIndividual.out.optional(),
    metadata: Schemas$IssuingCardholderCreateBodyMetadata.out.optional(),
    name: z.string(),
    phoneNumber: z.string().optional(),
    preferredLocales: z
      .array(z.enum(["de", "en", "es", "fr", "it"]))
      .optional(),
    spendingControls:
      Schemas$IssuingCardholderCreateBodySpendingControls.out.optional(),
    status: z.enum(["active", "inactive"]).optional(),
    type: z.enum(["company", "individual"]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      billing: "billing",
      company: "company",
      email: "email",
      expand: "expand",
      individual: "individual",
      metadata: "metadata",
      name: "name",
      phoneNumber: "phone_number",
      preferredLocales: "preferred_locales",
      spendingControls: "spending_controls",
      status: "status",
      type: "type",
    });
  });

export const Schemas$IssuingCardholderCreateBody = {
  in: SchemaIn$IssuingCardholderCreateBody,
  out: SchemaOut$IssuingCardholderCreateBody,
};
