import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingNetworkTokenAddress = {
  /**
   * The street address of the cardholder tokenizing the card.
   */
  line1: string;
  /**
   * The postal code of the cardholder tokenizing the card.
   */
  postalCode: string;
};

/**
 * @internal
 * IssuingNetworkTokenAddress without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingNetworkTokenAddress = {
  line1: string;
  postal_code: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingNetworkTokenAddress
 */
const SchemaIn$IssuingNetworkTokenAddress: z.ZodType<
  IssuingNetworkTokenAddress, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    line1: z.string(),
    postal_code: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      line1: "line1",
      postal_code: "postalCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingNetworkTokenAddress
 */
const SchemaOut$IssuingNetworkTokenAddress: z.ZodType<
  External$IssuingNetworkTokenAddress, // output type of this zod object
  z.ZodTypeDef,
  IssuingNetworkTokenAddress // the object to be transformed
> = z
  .object({
    line1: z.string(),
    postalCode: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      line1: "line1",
      postalCode: "postal_code",
    });
  });

export const Schemas$IssuingNetworkTokenAddress = {
  in: SchemaIn$IssuingNetworkTokenAddress,
  out: SchemaOut$IssuingNetworkTokenAddress,
};
