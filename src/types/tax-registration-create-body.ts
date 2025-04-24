import {
  External$TaxRegistrationCreateBodyCountryOptions,
  Schemas$TaxRegistrationCreateBodyCountryOptions,
  TaxRegistrationCreateBodyCountryOptions,
} from "./tax-registration-create-body-country-options";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBody
 */
export type TaxRegistrationCreateBody = {
  /**
   * Time at which the Tax Registration becomes active. It can be either `now` to indicate the current time, or a future timestamp measured in seconds since the Unix epoch.
   */
  activeFrom: "now" | number;
  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country: string;
  /**
   * Specific options for a registration in the specified `country`.
   */
  countryOptions: TaxRegistrationCreateBodyCountryOptions;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * If set, the Tax Registration stops being active at this time. If not set, the Tax Registration will be active indefinitely. Timestamp measured in seconds since the Unix epoch.
   */
  expiresAt?: number | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | ("now" | number)
    | string
    | TaxRegistrationCreateBodyCountryOptions
    | (string[] | undefined)
    | (number | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TaxRegistrationCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBody = {
  active_from: "now" | number;
  country: string;
  country_options: External$TaxRegistrationCreateBodyCountryOptions;
  expand?: string[] | undefined;
  expires_at?: number | undefined;

  [additionalProperty: string]:
    | ("now" | number)
    | string
    | External$TaxRegistrationCreateBodyCountryOptions
    | (string[] | undefined)
    | (number | undefined)
    | External$TaxRegistrationCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBody
 */
const SchemaIn$TaxRegistrationCreateBody: z.ZodType<
  TaxRegistrationCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active_from: z.union([z.enum(["now"]), z.number().int()]),
    country: z.string(),
    country_options: Schemas$TaxRegistrationCreateBodyCountryOptions.in,
    expand: z.array(z.string()).optional(),
    expires_at: z.number().int().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      active_from: "activeFrom",
      country: "country",
      country_options: "countryOptions",
      expand: "expand",
      expires_at: "expiresAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBody
 */
const SchemaOut$TaxRegistrationCreateBody: z.ZodType<
  External$TaxRegistrationCreateBody, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBody // the object to be transformed
> = z
  .object({
    activeFrom: z.union([z.enum(["now"]), z.number().int()]),
    country: z.string(),
    countryOptions: Schemas$TaxRegistrationCreateBodyCountryOptions.out,
    expand: z.array(z.string()).optional(),
    expiresAt: z.number().int().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      activeFrom: "active_from",
      country: "country",
      countryOptions: "country_options",
      expand: "expand",
      expiresAt: "expires_at",
    });
  });

export const Schemas$TaxRegistrationCreateBody = {
  in: SchemaIn$TaxRegistrationCreateBody,
  out: SchemaOut$TaxRegistrationCreateBody,
};
