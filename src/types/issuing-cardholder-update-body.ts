import {
  External$IssuingCardholderUpdateBodyBilling,
  IssuingCardholderUpdateBodyBilling,
  Schemas$IssuingCardholderUpdateBodyBilling,
} from "./issuing-cardholder-update-body-billing";
import {
  External$IssuingCardholderUpdateBodyCompany,
  IssuingCardholderUpdateBodyCompany,
  Schemas$IssuingCardholderUpdateBodyCompany,
} from "./issuing-cardholder-update-body-company";
import {
  External$IssuingCardholderUpdateBodyIndividual,
  IssuingCardholderUpdateBodyIndividual,
  Schemas$IssuingCardholderUpdateBodyIndividual,
} from "./issuing-cardholder-update-body-individual";
import {
  External$IssuingCardholderUpdateBodyMetadata,
  IssuingCardholderUpdateBodyMetadata,
  Schemas$IssuingCardholderUpdateBodyMetadata,
} from "./issuing-cardholder-update-body-metadata";
import {
  External$IssuingCardholderUpdateBodySpendingControls,
  IssuingCardholderUpdateBodySpendingControls,
  Schemas$IssuingCardholderUpdateBodySpendingControls,
} from "./issuing-cardholder-update-body-spending-controls";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingCardholderUpdateBody
 */
export type IssuingCardholderUpdateBody = {
  /**
   * The cardholder's billing address.
   */
  billing?: IssuingCardholderUpdateBodyBilling | undefined;
  /**
   * Additional information about a `company` cardholder.
   */
  company?: IssuingCardholderUpdateBodyCompany | undefined;
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
  individual?: IssuingCardholderUpdateBodyIndividual | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: IssuingCardholderUpdateBodyMetadata | undefined;
  /**
   * The cardholder's phone number. This is required for all cardholders who will be creating EU cards. See the [3D Secure documentation](https://stripe.com/docs/issuing/3d-secure) for more details.
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
  spendingControls?: IssuingCardholderUpdateBodySpendingControls | undefined;
  /**
   * Specifies whether to permit authorizations on this cardholder's cards.
   */
  status?: ("active" | "inactive") | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (IssuingCardholderUpdateBodyBilling | undefined)
    | (IssuingCardholderUpdateBodyCompany | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (IssuingCardholderUpdateBodyIndividual | undefined)
    | (IssuingCardholderUpdateBodyMetadata | undefined)
    | (string | undefined)
    | (("de" | "en" | "es" | "fr" | "it")[] | undefined)
    | (IssuingCardholderUpdateBodySpendingControls | undefined)
    | (("active" | "inactive") | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * IssuingCardholderUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderUpdateBody = {
  billing?: External$IssuingCardholderUpdateBodyBilling | undefined;
  company?: External$IssuingCardholderUpdateBodyCompany | undefined;
  email?: string | undefined;
  expand?: string[] | undefined;
  individual?: External$IssuingCardholderUpdateBodyIndividual | undefined;
  metadata?: External$IssuingCardholderUpdateBodyMetadata | undefined;
  phone_number?: string | undefined;
  preferred_locales?: ("de" | "en" | "es" | "fr" | "it")[] | undefined;
  spending_controls?:
    | External$IssuingCardholderUpdateBodySpendingControls
    | undefined;
  status?: ("active" | "inactive") | undefined;

  [additionalProperty: string]:
    | (External$IssuingCardholderUpdateBodyBilling | undefined)
    | (External$IssuingCardholderUpdateBodyCompany | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (External$IssuingCardholderUpdateBodyIndividual | undefined)
    | (External$IssuingCardholderUpdateBodyMetadata | undefined)
    | (string | undefined)
    | (("de" | "en" | "es" | "fr" | "it")[] | undefined)
    | (External$IssuingCardholderUpdateBodySpendingControls | undefined)
    | (("active" | "inactive") | undefined)
    | External$IssuingCardholderUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderUpdateBody
 */
const SchemaIn$IssuingCardholderUpdateBody: z.ZodType<
  IssuingCardholderUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    billing: Schemas$IssuingCardholderUpdateBodyBilling.in.optional(),
    company: Schemas$IssuingCardholderUpdateBodyCompany.in.optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    individual: Schemas$IssuingCardholderUpdateBodyIndividual.in.optional(),
    metadata: Schemas$IssuingCardholderUpdateBodyMetadata.in.optional(),
    phone_number: z.string().optional(),
    preferred_locales: z
      .array(z.enum(["de", "en", "es", "fr", "it"]))
      .optional(),
    spending_controls:
      Schemas$IssuingCardholderUpdateBodySpendingControls.in.optional(),
    status: z.enum(["active", "inactive"]).optional(),
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
      phone_number: "phoneNumber",
      preferred_locales: "preferredLocales",
      spending_controls: "spendingControls",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderUpdateBody
 */
const SchemaOut$IssuingCardholderUpdateBody: z.ZodType<
  External$IssuingCardholderUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderUpdateBody // the object to be transformed
> = z
  .object({
    billing: Schemas$IssuingCardholderUpdateBodyBilling.out.optional(),
    company: Schemas$IssuingCardholderUpdateBodyCompany.out.optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    individual: Schemas$IssuingCardholderUpdateBodyIndividual.out.optional(),
    metadata: Schemas$IssuingCardholderUpdateBodyMetadata.out.optional(),
    phoneNumber: z.string().optional(),
    preferredLocales: z
      .array(z.enum(["de", "en", "es", "fr", "it"]))
      .optional(),
    spendingControls:
      Schemas$IssuingCardholderUpdateBodySpendingControls.out.optional(),
    status: z.enum(["active", "inactive"]).optional(),
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
      phoneNumber: "phone_number",
      preferredLocales: "preferred_locales",
      spendingControls: "spending_controls",
      status: "status",
    });
  });

export const Schemas$IssuingCardholderUpdateBody = {
  in: SchemaIn$IssuingCardholderUpdateBody,
  out: SchemaOut$IssuingCardholderUpdateBody,
};
