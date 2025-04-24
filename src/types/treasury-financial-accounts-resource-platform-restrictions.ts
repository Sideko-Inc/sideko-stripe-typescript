import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Restrictions that a Connect Platform has placed on this FinancialAccount.
 */
export type TreasuryFinancialAccountsResourcePlatformRestrictions = {
  /**
   * Restricts all inbound money movement.
   */
  inboundFlows?: ("restricted" | "unrestricted") | null | undefined;
  /**
   * Restricts all outbound money movement.
   */
  outboundFlows?: ("restricted" | "unrestricted") | null | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountsResourcePlatformRestrictions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsResourcePlatformRestrictions = {
  inbound_flows?: ("restricted" | "unrestricted") | null | undefined;
  outbound_flows?: ("restricted" | "unrestricted") | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsResourcePlatformRestrictions
 */
const SchemaIn$TreasuryFinancialAccountsResourcePlatformRestrictions: z.ZodType<
  TreasuryFinancialAccountsResourcePlatformRestrictions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    inbound_flows: z.enum(["restricted", "unrestricted"]).nullable().optional(),
    outbound_flows: z
      .enum(["restricted", "unrestricted"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      inbound_flows: "inboundFlows",
      outbound_flows: "outboundFlows",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsResourcePlatformRestrictions
 */
const SchemaOut$TreasuryFinancialAccountsResourcePlatformRestrictions: z.ZodType<
  External$TreasuryFinancialAccountsResourcePlatformRestrictions, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsResourcePlatformRestrictions // the object to be transformed
> = z
  .object({
    inboundFlows: z.enum(["restricted", "unrestricted"]).nullable().optional(),
    outboundFlows: z.enum(["restricted", "unrestricted"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      inboundFlows: "inbound_flows",
      outboundFlows: "outbound_flows",
    });
  });

export const Schemas$TreasuryFinancialAccountsResourcePlatformRestrictions = {
  in: SchemaIn$TreasuryFinancialAccountsResourcePlatformRestrictions,
  out: SchemaOut$TreasuryFinancialAccountsResourcePlatformRestrictions,
};
