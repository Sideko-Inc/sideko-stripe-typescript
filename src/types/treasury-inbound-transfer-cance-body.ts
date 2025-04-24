import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryInboundTransferCanceBody
 */
export type TreasuryInboundTransferCanceBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]: (string[] | undefined) | any | null | undefined;
};

/**
 * @internal
 * TreasuryInboundTransferCanceBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryInboundTransferCanceBody = {
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | External$TreasuryInboundTransferCanceBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryInboundTransferCanceBody
 */
const SchemaIn$TreasuryInboundTransferCanceBody: z.ZodType<
  TreasuryInboundTransferCanceBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryInboundTransferCanceBody
 */
const SchemaOut$TreasuryInboundTransferCanceBody: z.ZodType<
  External$TreasuryInboundTransferCanceBody, // output type of this zod object
  z.ZodTypeDef,
  TreasuryInboundTransferCanceBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
    });
  });

export const Schemas$TreasuryInboundTransferCanceBody = {
  in: SchemaIn$TreasuryInboundTransferCanceBody,
  out: SchemaOut$TreasuryInboundTransferCanceBody,
};
