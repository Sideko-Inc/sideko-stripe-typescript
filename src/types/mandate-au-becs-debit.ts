import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type MandateAuBecsDebit = {
  /**
   * The URL of the mandate. This URL generally contains sensitive information about the customer and should be shared with them exclusively.
   */
  url: string;
};

/**
 * @internal
 * MandateAuBecsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$MandateAuBecsDebit = {
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object MandateAuBecsDebit
 */
const SchemaIn$MandateAuBecsDebit: z.ZodType<
  MandateAuBecsDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$MandateAuBecsDebit
 */
const SchemaOut$MandateAuBecsDebit: z.ZodType<
  External$MandateAuBecsDebit, // output type of this zod object
  z.ZodTypeDef,
  MandateAuBecsDebit // the object to be transformed
> = z
  .object({
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      url: "url",
    });
  });

export const Schemas$MandateAuBecsDebit = {
  in: SchemaIn$MandateAuBecsDebit,
  out: SchemaOut$MandateAuBecsDebit,
};
