import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0
 */
export type TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0 =
  {
    network?: ("ach" | "us_domestic_wire") | undefined;
  };

/**
 * @internal
 * TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0 =
  {
    network?: ("ach" | "us_domestic_wire") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0
 */
const SchemaIn$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0: z.ZodType<
  TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    network: z.enum(["ach", "us_domestic_wire"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      network: "network",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0
 */
const SchemaOut$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0: z.ZodType<
  External$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0 // the object to be transformed
> = z
  .object({
    network: z.enum(["ach", "us_domestic_wire"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      network: "network",
    });
  });

export const Schemas$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0 =
  {
    in: SchemaIn$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0,
    out: SchemaOut$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0,
  };
