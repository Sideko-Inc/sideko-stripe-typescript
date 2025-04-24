import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ApplePayDomainCreateBody
 */
export type ApplePayDomainCreateBody = {
  domainName: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | string
    | (string[] | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * ApplePayDomainCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ApplePayDomainCreateBody = {
  domain_name: string;
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | string
    | (string[] | undefined)
    | External$ApplePayDomainCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ApplePayDomainCreateBody
 */
const SchemaIn$ApplePayDomainCreateBody: z.ZodType<
  ApplePayDomainCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    domain_name: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      domain_name: "domainName",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ApplePayDomainCreateBody
 */
const SchemaOut$ApplePayDomainCreateBody: z.ZodType<
  External$ApplePayDomainCreateBody, // output type of this zod object
  z.ZodTypeDef,
  ApplePayDomainCreateBody // the object to be transformed
> = z
  .object({
    domainName: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      domainName: "domain_name",
      expand: "expand",
    });
  });

export const Schemas$ApplePayDomainCreateBody = {
  in: SchemaIn$ApplePayDomainCreateBody,
  out: SchemaOut$ApplePayDomainCreateBody,
};
