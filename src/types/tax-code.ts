import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * [Tax codes](https://stripe.com/docs/tax/tax-categories) classify goods and services for tax purposes.
 */
export type TaxCode = {
  /**
   * A detailed description of which types of products the tax code represents.
   */
  description: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * A short name for the tax code.
   */
  name: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "tax_code";
};

/**
 * @internal
 * TaxCode without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxCode = {
  description: string;
  id: string;
  name: string;
  object: "tax_code";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxCode
 */
const SchemaIn$TaxCode: z.ZodType<
  TaxCode, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    description: z.string(),
    id: z.string(),
    name: z.string(),
    object: z.enum(["tax_code"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      id: "id",
      name: "name",
      object: "object",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxCode
 */
const SchemaOut$TaxCode: z.ZodType<
  External$TaxCode, // output type of this zod object
  z.ZodTypeDef,
  TaxCode // the object to be transformed
> = z
  .object({
    description: z.string(),
    id: z.string(),
    name: z.string(),
    object: z.enum(["tax_code"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      id: "id",
      name: "name",
      object: "object",
    });
  });

export const Schemas$TaxCode = {
  in: SchemaIn$TaxCode,
  out: SchemaOut$TaxCode,
};
