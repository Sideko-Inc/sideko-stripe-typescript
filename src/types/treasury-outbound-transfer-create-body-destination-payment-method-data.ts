import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Hash used to generate the PaymentMethod to be used for this OutboundTransfer. Exclusive with `destination_payment_method`.
 */
export type TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData = {
  financialAccount?: string | undefined;
  type: "financial_account";
};

/**
 * @internal
 * TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData =
  {
    financial_account?: string | undefined;
    type: "financial_account";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData
 */
const SchemaIn$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData: z.ZodType<
  TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    financial_account: z.string().optional(),
    type: z.enum(["financial_account"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financial_account: "financialAccount",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData
 */
const SchemaOut$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData: z.ZodType<
  External$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData, // output type of this zod object
  z.ZodTypeDef,
  TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData // the object to be transformed
> = z
  .object({
    financialAccount: z.string().optional(),
    type: z.enum(["financial_account"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financialAccount: "financial_account",
      type: "type",
    });
  });

export const Schemas$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData =
  {
    in: SchemaIn$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData,
    out: SchemaOut$TreasuryOutboundTransferCreateBodyDestinationPaymentMethodData,
  };
