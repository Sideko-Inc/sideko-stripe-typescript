import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type MandateSepaDebit = {
  /**
   * The unique reference of the mandate.
   */
  reference: string;
  /**
   * The URL of the mandate. This URL generally contains sensitive information about the customer and should be shared with them exclusively.
   */
  url: string;
};

/**
 * @internal
 * MandateSepaDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$MandateSepaDebit = {
  reference: string;
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object MandateSepaDebit
 */
const SchemaIn$MandateSepaDebit: z.ZodType<
  MandateSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    reference: z.string(),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference: "reference",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$MandateSepaDebit
 */
const SchemaOut$MandateSepaDebit: z.ZodType<
  External$MandateSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  MandateSepaDebit // the object to be transformed
> = z
  .object({
    reference: z.string(),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference: "reference",
      url: "url",
    });
  });

export const Schemas$MandateSepaDebit = {
  in: SchemaIn$MandateSepaDebit,
  out: SchemaOut$MandateSepaDebit,
};
