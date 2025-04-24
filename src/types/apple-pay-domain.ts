import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ApplePayDomain = {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  domainName: string;
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
  object: "apple_pay_domain";
};

/**
 * @internal
 * ApplePayDomain without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ApplePayDomain = {
  created: number;
  domain_name: string;
  id: string;
  livemode: boolean;
  object: "apple_pay_domain";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ApplePayDomain
 */
const SchemaIn$ApplePayDomain: z.ZodType<
  ApplePayDomain, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z.number().int(),
    domain_name: z.string(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["apple_pay_domain"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      domain_name: "domainName",
      id: "id",
      livemode: "livemode",
      object: "object",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ApplePayDomain
 */
const SchemaOut$ApplePayDomain: z.ZodType<
  External$ApplePayDomain, // output type of this zod object
  z.ZodTypeDef,
  ApplePayDomain // the object to be transformed
> = z
  .object({
    created: z.number().int(),
    domainName: z.string(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["apple_pay_domain"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      domainName: "domain_name",
      id: "id",
      livemode: "livemode",
      object: "object",
    });
  });

export const Schemas$ApplePayDomain = {
  in: SchemaIn$ApplePayDomain,
  out: SchemaOut$ApplePayDomain,
};
