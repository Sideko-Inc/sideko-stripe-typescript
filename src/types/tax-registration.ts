import {
  External$TaxProductRegistrationsResourceCountryOptions,
  Schemas$TaxProductRegistrationsResourceCountryOptions,
  TaxProductRegistrationsResourceCountryOptions,
} from "./tax-product-registrations-resource-country-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A Tax `Registration` lets us know that your business is registered to collect tax on payments within a region, enabling you to [automatically collect tax](https://stripe.com/docs/tax).
 *
 * Stripe doesn't register on your behalf with the relevant authorities when you create a Tax `Registration` object. For more information on how to register to collect tax, see [our guide](https://stripe.com/docs/tax/registering).
 *
 * Related guide: [Using the Registrations API](https://stripe.com/docs/tax/registrations-api)
 */
export type TaxRegistration = {
  /**
   * Time at which the registration becomes active. Measured in seconds since the Unix epoch.
   */
  activeFrom: number;
  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country: string;
  countryOptions: TaxProductRegistrationsResourceCountryOptions;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * If set, the registration stops being active at this time. If not set, the registration will be active indefinitely. Measured in seconds since the Unix epoch.
   */
  expiresAt?: number | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "tax.registration";
  /**
   * The status of the registration. This field is present for convenience and can be deduced from `active_from` and `expires_at`.
   */
  status: "active" | "expired" | "scheduled";
};

/**
 * @internal
 * TaxRegistration without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistration = {
  active_from: number;
  country: string;
  country_options: External$TaxProductRegistrationsResourceCountryOptions;
  created: number;
  expires_at?: number | null | undefined;
  id: string;
  livemode: boolean;
  object: "tax.registration";
  status: "active" | "expired" | "scheduled";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistration
 */
const SchemaIn$TaxRegistration: z.ZodType<
  TaxRegistration, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active_from: z.number().int(),
    country: z.string(),
    country_options: Schemas$TaxProductRegistrationsResourceCountryOptions.in,
    created: z.number().int(),
    expires_at: z.number().int().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["tax.registration"]),
    status: z.enum(["active", "expired", "scheduled"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active_from: "activeFrom",
      country: "country",
      country_options: "countryOptions",
      created: "created",
      expires_at: "expiresAt",
      id: "id",
      livemode: "livemode",
      object: "object",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistration
 */
const SchemaOut$TaxRegistration: z.ZodType<
  External$TaxRegistration, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistration // the object to be transformed
> = z
  .object({
    activeFrom: z.number().int(),
    country: z.string(),
    countryOptions: Schemas$TaxProductRegistrationsResourceCountryOptions.out,
    created: z.number().int(),
    expiresAt: z.number().int().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["tax.registration"]),
    status: z.enum(["active", "expired", "scheduled"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      activeFrom: "active_from",
      country: "country",
      countryOptions: "country_options",
      created: "created",
      expiresAt: "expires_at",
      id: "id",
      livemode: "livemode",
      object: "object",
      status: "status",
    });
  });

export const Schemas$TaxRegistration = {
  in: SchemaIn$TaxRegistration,
  out: SchemaOut$TaxRegistration,
};
